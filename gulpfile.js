// This file is used to collect and process all the site's assets, to help
// generate the live website. You can read more about Gulp here:
// https://gulpjs.com/

// This setup is based on Chris Ferdinandi's excellent Gulp Boilerplate
// project: https://gomakethings.com/a-new-gulp-boilerplate/


// Settings ///////////////////////////////////////////////////////////////////
// Turn on/off build features
var settings = {
    clean: true,
    scripts: true,
    polyfills: true,
	styles: true,
    lint: true,
    svgs: true,
    copy: true,
    reload: true,
    styleguide: true
  };
  
  
  // Paths to project folders ///////////////////////////////////////////////////
  var paths = {
    input: 'src/',
    output: 'dist/',
    scripts: {
      input: 'src/js/**/*.js',
      polyfills: '.polyfill.js',
      output: 'dist/js/'
    },
    assets: {
      input: 'src/assets/img/*.{jpg,jpeg,gif,webm,webp,png,zip}',
      output: 'dist/assets/img/'
	},
	fonts: {
	  input: 'src/assets/fonts/*.{woff,woff2}',
	  output: 'dist/assets/fonts/'
	},
    styles: {
      input: 'src/scss/**/main.scss',
      output: 'src/_includes/'
    },
    svgs: {
      input: 'src/assets/img/*.svg',
      output: 'dist/assets/img/'
    },
    reload: './dist/'
  };
  
  
  // Gulp Packages //////////////////////////////////////////////////////////////
  
  // General
  var {gulp, src, dest, watch, series, parallel} = require('gulp');
  var del = require('del');
  var flatmap = require('gulp-flatmap');
  var lazypipe = require('lazypipe');
  var rename = require('gulp-rename');
  
  // Scripts
  var jshint = require('gulp-jshint');
  var concat = require('gulp-concat');
  var uglify = require('gulp-uglify');
  var optimizejs = require('gulp-optimize-js');
  
  // Styles
  var sass = require('gulp-sass');
  var prefix = require('autoprefixer');
  var minify = require('cssnano');
  var cleanCSS = require('gulp-clean-css');
  
  // SVGs
  var svgmin = require('gulp-svgmin');
  
  // BrowserSync
  var browserSync = require('browser-sync');
  
/**
 * Gulp Tasks
 */

// Remove pre-existing content from output folders
var cleanDist = function (done) {

	// Make sure this feature is activated before running
	if (!settings.clean) return done();

	// Clean the dist folder
	del.sync([
		paths.output
	]);

	// Signal completion
	return done();

};

// Repeated JavaScript tasks
var jsTasks = lazypipe()
	.pipe(optimizejs)
	.pipe(dest, paths.scripts.output)
	.pipe(rename, {suffix: '.min'})
	.pipe(uglify)
	.pipe(optimizejs)
	.pipe(dest, paths.scripts.output);

// Lint, minify, and concatenate scripts
var buildScripts = function (done) {

	// Make sure this feature is activated before running
	if (!settings.scripts) return done();

	// Run tasks on script files
	return src(paths.scripts.input)
		.pipe(flatmap(function(stream, file) {

			// If the file is a directory
			if (file.isDirectory()) {

				// Setup a suffix variable
				var suffix = '';

				// If separate polyfill files enabled
				if (settings.polyfills) {

					// Update the suffix
					suffix = '.polyfills';

					// Grab files that aren't polyfills, concatenate them, and process them
					src([file.path + '/*.js', '!' + file.path + '/*' + paths.scripts.polyfills])
						.pipe(concat(file.relative + '.js'))
						.pipe(jsTasks());

				}

				// Grab all files and concatenate them
				// If separate polyfills enabled, this will have .polyfills in the filename
				src(file.path + '/*.js')
					.pipe(concat(file.relative + suffix + '.js'))
					.pipe(jsTasks());

				return stream;

			}

			// Otherwise, process the file
			return stream.pipe(jsTasks());

		}));

};

// Lint scripts
var lintScripts = function (done) {

	// Make sure this feature is activated before running
	if (!settings.scripts) return done();

	// Lint scripts
	return src(paths.scripts.input)
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));

};

// Process, lint, and minify Sass files
var buildStyles = function (done) {

	// Make sure this feature is activated before running
	if (!settings.styles) return done();

	// Run tasks on all Sass files
	return src(paths.styles.input)
		.pipe(sass({
			outputStyle: 'expanded',
			sourceComments: true
		}))
		.pipe(dest(paths.styles.output))
		.pipe(rename({suffix: '.min'}))
		.pipe(cleanCSS([
			minify({
				discardComments: {
					removeAll: true
				}
			})
		]))
		.pipe(dest(paths.styles.output));

};

// Optimize SVG files
var buildSVGs = function (done) {

	// Make sure this feature is activated before running
	if (!settings.svgs) return done();

	// Optimize SVG files
	return src(paths.svgs.input)
		.pipe(svgmin())
		.pipe(dest(paths.svgs.output));
    
};

// Copy image assets
var copyAssets = function (done) {
	// Make sure this feature is activated before running
	if (!settings.copy) return done();

	// Copy assets
	return src(paths.assets.input)
	.pipe(dest(paths.assets.output));

};

// Copy font assets
var copyFonts = function (done) {
	// Make sure this feature is activated before running
	if (!settings.copy) return done();
  
	// Copy fonts
	return src(paths.fonts.input)
	  .pipe(dest(paths.fonts.output));
  
  };

// Watch for changes to the src directory
var startServer = function (done) {

	// Make sure this feature is activated before running
	if (!settings.reload) return done();

	// Initialize BrowserSync
	browserSync.init({
		server: {
			baseDir: paths.reload
		}
	});

	// Signal completion
	done();

};

// Reload the browser when files change
var reloadBrowser = function (done) {
	if (!settings.reload) return done();
	browserSync.reload();
	done();
};

// Watch for changes
var watchSource = function (done) {
	watch(paths.input, series(exports.default, reloadBrowser));
	done();
};
  
/**
 * Export Tasks
 */

// Default task
// gulp
exports.default = series(
	cleanDist,
	parallel(
		buildScripts,
		lintScripts,
		buildStyles,
		buildSVGs,
		copyAssets,
		copyFonts
    )
);

// Watch and reload
// gulp watch
exports.watch = series(
	exports.default,
	startServer,
	watchSource
);