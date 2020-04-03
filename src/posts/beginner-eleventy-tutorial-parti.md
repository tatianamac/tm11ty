---
title: Beginner's Guide to Eleventy
description: What is a static site generator? (Part I)
summary: Static site generators (SSGs) are critical to modern tooling. When used thoughtfully, SSGs can facilitate sites that need something in the middle—in the vast expanse between static, hand-coded sites and dynamic behemoths. In a multi-part guide, I'll show you how to use Eleventy.
date: 2020-04-02 16:09:03
tags:
  - tutorial
  - Eleventy
  - featured
layout: layouts/post.njk
bgColor: white
navClass: bg-white
colorMode: dark
---
## Intro to the Series

I won't lie. When I first installed a static site generator (SSG), I was pleased with how quickly it installed. However, my immediate success was short lived. Something something, beginner's luck.

Even though I was comfortable working in design and templating systems (having built many WordPress sites before) and competent in front-front-end development, I still wasn't clear on a lot. I couldn't understand how pages were rendered, where assets and data were stored, and really, how this was saving me any time at all?

My learning curve was steep.

Like any good developer, though, I hate myself, so I stuck with it. Bit by bit, I learned the power behind the simplicity, flexibility, and reproducibility.

My hope with this guide is to remove barriers, particularly for designers/developers who:

- are limited by What-You-See-Is-What-You-Get (WYSIWYG) tools like Squarespace;
- want the efficiencies of a content management system (CMS);
- possess *some* competency in front-end languages (HTML, CSS, JS); and/or
- don't understand the basic setup and infrastructure of SSGs.

To remove barriers to entry, we must provide adequate context. I will break this guide into a multi-part series:

- **Part I:** What is a static site generator?
- **Part II:** Installation/Structure (coming soon)
- **Part III:** Basic Customisation (coming soon)
- **Part IV**: Advanced Customisation  (coming soon)

In general, I think our industry fears overexplaining concepts. We tend to presume people have skills that they don't always have and leave a lot of helpful context or explanation unsaid. After "hello world" examples, we tend to optimise our content for superusers. Beginners are sent into the world with a very limited foundation and asked to make a fairly large leap to intermediate on their own. By writing more beginner-through-intermediate tutorials like this, I hope to provide a solid foundation by answering unanswered questions and escalating examples as we go.

Throughout this tutorial, I will simplify some things a little bit (like in diagrams), which means you could "well actually technically" me and be right. In other areas I will be intentionally verbose, which means I might explain concepts you already know. Congratulations. Here is a trophy. 🏆

## Part I

Before we dive into the tactical how-to (which you will find in Part II, once I write it), I want to provide context for static site generators (SSG) and how they fit into the web landscape. I'll break down what the fork an SSG even is (not a Star Trek series as I once thought), how SSGs compare to other tools and frameworks, costs/benefits to this choice, and lastly, why I choose [Eleventy](https://www.11ty.dev/) for my own site.

## The Landscape

Generally speaking, there are two types of sites:

- static sites and
- dynamic sites.

SSG-generated sites are technically a subcategory of static sites, but they're a *special* type. More on that later. Dynamic sites include sites built atop a framework, like WordPress, Drupal, Joomla.

### Static Sites

Static sites have static content. Static sites store the information (or assets) needed to serve the site (HTML, images, scripts) on a server (usually whomever is paid to "host" the site).

1. When users access a site in their browser, the browser requests files from the web server.
2. The web server gathers the files you need for the specific page you requested from a finite list of files that it has stored.
3. The web server sends the files to your browser.
4. Your browser renders the files and presents you with the website.

Theoretically, everyone should receive the same information (even if it ends up looking slightly different).

![Diagram of static sites where all elements are from Super Mario to illustrate how static sites are generated. Computer and browser (browser logo is Bowser's eye and eyebrow done in Firefox/Edge style) sends a request (Bullet Bill) to the web server (Thomp), which then sends back static files (Koopas dresed as HTML, CSS, and JS files).](../../assets/img/eleventy-i-static.jpg)

The [first website launched in 1990](http://info.cern.ch/hypertext/WWW/TheProject.html) by Sir Tim Berners-Lee was a static site with just unstyled HTML.

#### Static Site Examples

Static sites are most any site when we think of "basic" or "hard-coded sites" (though those are not the only ways to generate static sites; more on that later).

I wanted to add a list here of static sites built by hand (without the assistance a static site generator, framework, or platform). If you come across any good examples, please [reach out on Twitter](https://www.twitter.com/TatianaTMac) so I may add them!

#### Static Site Pros

- **Fast**: Static sites are predictable. Because there is a finite list of requests you can make (get me this page or that page), there isn't any processing that happens on the server side. The more requests you can make as a user that require the website do something, or client-side server requests, slow down a website, particularly when they become complex. Client-side server requests things like when you search or filter a website, or log in.
- **Lean**: Static sites aren't as resource-intensive (their file sizes tend to be relatively small). If you have an unexpected spike in traffic to your site, they are usually able to handle the influx just fine (as long as their web hosts are able to keep up).
- **Secure:** As there are no entry points (you can't input or send information to a static site like you can in dynamic sites), static sites are much more secure when used for a comparable dynamic site.
- **Economic Hosting:** You're usually just paying for the hosting of your static assets, which is inexpensive compared to dynamic sites that require maintaining a service (like Squarespace) and a database (which involves things like mySQL).
- **Controllable:** With a static site, whoever creates it has a lot more relative control over the source files. Since the source files and the rendered files are the same, you know how the site will be generated.

#### Static Site Cons

Note that there are workarounds for many of these cons. For scope of article and brevity, **I've left out the tools that address/serve some of these cons.** I know they exist. Some of them will be addressed in the SSG section, so hold your commenting horses (ya neigh-sayers), and note that I can't talk about everything in this one article.

- **Limited**: Static sites can't do more complex things that we take for granted, like buying things online, getting weather for our location, etc.
- **Gatekept:** Static sites require knowledge of HTML/CSS/JS to create and to update, turning developers into either content overloads or servants (depending on your org structure 😂). If you don't have these skills in house, you'll have to source them. Hand-coding websites is time-consuming, and thus, can be costly.
- **Non-dynamic:** Everyone receives the same content, regardless of things like geolocation, time of day, etc. (Here is one of those areas where workarounds can apply. Did you stop yourself from explaining to me? Here, have another trophy. 🏆 Don't forget to unwind your undies.)
- **Difficult to scale:** Depending on how you built the site, updating one global element (like a navigation) could mean updating hundreds/thousands of pages, which is impractical, resource-intensive, error-prone, and... boring AF.
- **Inconsistent:** Consistency is reliant on the people building and maintaining the site. If they are not meticulous and/or lack adequate resources and quality assurance infrastructure, the site will likely lack polish.
- **Inputless**: No log-ins (accounts), inputs (forms), or user-generated content.
- **Not Version-Controlled:** While third-party services can help, if you do not set such services up, overwriting your files directly on the server means that they're overwritten forever. Reverting will require that you maintain some version control on the creator side.

### Dynamic Sites

While making a bunch of static sites accessible to thousands of users was a huge invention and progress for the information age, it wasn't enough. As the amount of available content increased, the user experience became quite monotonous, impractical, and undiscoverable.

Dynamic sites were introduced in 1993 with the advent of the Common Gateway Interface (CGI). The CGI is a set of standards to define how information is exchanged between servers.

(CGI also, not to be confused with the other, more well-known Computer Generated Imagery, which is what makes Michael Bay movies *pop*. Fun fact: CGI's logo resembles the album cover for Pink Floyd's *Dark Side of the Moon*. But I disambiguate.)

In the barest terms, CGI allowed for servers to do more than just receive requests and respond to requests as input/output. CGIs allowed the server __to process__ the request, which adds a layer of complexity to how websites are served to you via browser.

In a dynamic site:

1. When users access a site in their browser, the browser requests files from the server. The request could include a search query, a form submission, or even implicit data (like your geolocation).
2. Using the criteria set out by the CGI, the web server talks to another server (the application server) that processes all the inputs and makes a list of what it needs.
3. The application server will talk to another server, the database, to gather the information it needs, say, like, your order history or all the possible products. The application server translates this all into a language that the web server understands, and then sends it to the web server.
4. The web server sends the generated files to your browser.
5. Your browser renders the files and presents you with the website.

![Diagram of static sites where all elements are from Super Mario to illustrate how static sites are generated. Computer and browser (browser logo is Bowser's eye and eyebrow done in Firefox/Edge style) sends a request (Bullet Bill) to the web server (Thomp), which communicates with app server (question mark block), which then communicates with database (pipe) then sends back static files (Koopas dresed as HTML, CSS, and JS files).](../../assets/img/eleventy-i-dynamic.jpg)

Dynamic sites opened up a whole world of the internet that was not possible before, customising the experience, introducing inextricable complexity in the process.

>One could argue that applications and programs like Dreamweaver and FrontPage were the first static site generators that used a WYSIWYG editor. For brevity, I'm leaving that part of the history out.

#### Dynamic Site Examples

Dynamic sites are *everything else*. Any site that serves you a website from a database, an Application Programming Interface (API), or an experience based on input is a dynamic site. Common features on dynamic sites include shopping carts, search or content queries, location data, user data, and so on. Most "complex" sites tend to be dynamic; think Amazon, Facebook, Pinterest. (Most websites that are also a product also tend to be dynamic.)

Sites that are generated by CMSes like WordPress, Squarespace, and Shopify are also dynamic.

#### Dynamic Site Pros

- **Dynamic:** As the name suggests, the power comes in generating content based on specific requests or data gathered (some of that data is gathered duplicitously and/or without consent, but a topic for another day).
- **Powerful:** Dynamic sites allow for integration of CMSes, eCommerce platforms, and more complexity in general. Dynamic sites take the web from just a content storage platform, to a living, breathing information hub that can serve us content based on variables. That's pretty cool.
- **No-/Low-Code:** The addition of CMSes and eCommerce platforms with dashboards means that code no longer becomes a requirement to create a site, lowering the barrier to entry. The cost of maintenance no longer requires code, but only familiarity with the editor interface (dashboard), which is quite a bit more economically viable to learn.
- **Out-of-Box Set-up:** With platform integration, installing and launching a site becomes a lot faster. Products like Squarespace and Shopify boast the time to launch as a feature and earn their revenue through hosting the interface and your site.
- **Scalable**: Adding more data or content already has a workflow and a place to store it (for example, you can import a thousand posts from another blogging platform or user data in a comma-separated values (CSV) file instead of manually entering it).
- **Consistent:** As things like blog posts require an infrastructure, you can count each post appearing consistently based on the rules you set out.
- **Search Engine Optimisation (SEO)-Focused**: Most CMSes are tailored to "business needs", which means that out of box, they tend to reveal ways to improve your SEO.
- **Version-Controlled**: Most platforms integrate some sort of version controlling, so content can be reversed if an error is made.

#### Dynamic Site Cons

>Workarounds exist for all of these cons (and where appropriate, I've noted them) and some of them will be addressed in the SSG section, so hold your commenting horses.

- **Costly**: Convenience comes at a price. While WordPress itself is free, themes and other add-ons can start to add up. Monthly paid services like Squarespace and Shopify can be cost-prohibitive to many people, and become exponentially costly as you want to add features for growth. Developers who specialise in these frameworks can also charge a premium as their skills tend to be niche.
- **Resource-Intensive:** Every time a WordPress site is loaded, it has to call the server and ask for any scripts, plug-in libraries, etc. The time it takes to load these scripts can be long and require a lot of bandwidth.
- **Server Requirements**: To run WordPress, special servers like Apache or NGINX are required. As with all things, there is a cost associated with this, which typically get passed down the chain. To locally run a WordPress site (so that you're not making the edits live on the web), you need to do some manipulation to your machine, which can be confusing.
- **Slow**: All of the inputs and dynamic calls result in having to wait for the server to do its job. We all know what that's like; when you're waiting for a colleague to finish their task before you can finish yours. Any delays in speed result in disengaged/unhappy users and thus, negatively impacted SEO measurements.
- **Cache-Difficult:** Caching provides major benefits to sites. Caching basically stores a copy of the site somewhere else (whether that be on your computer in a temporary file) or on another server (like a content delivery network (CDN)). Doing so takes one load off of the main server you're accessing. However, caching becomes very complex when the server isn't __quite__ sure even which HTML or images it should serve you because the variables are too vast (Are you logged in? Did you change a setting? Is there something in your cart? Did someone comment since you last logged in? Are you cute? *How* cute?)
- **Inaccessible:**
  - Heavy sites mean that users who rely on phone data (and pay per megabyte) are being economically taxed for accessing your site. In regions and contexts with systematically slower internet speeds, your users will likely bounce if your site is too slow. Remember, this is your fault for building a site maximised for 5G internet, not your user's inability to purchase an iPhone 14S.
  - While a static site does not guarantee accessibility and you *can* make dynamic sites accessible, dynamic sites make out-of-box accessibility far more complex. A few static HTML pages will likely be fairly accessible as there's not much to them and HTML is fairly generous. However, the accessibility of a dynamic site becomes reliant on the accessibility of a platform on which it's built. The tools used to build the site (like the dash) need to be accessible as does the site itself. Any layer of complication increases the dimension of accessibility exponentially.
- **Insecure:** Dynamic sites have to allow for input, which means that they open the doors for bugs and viruses. [Something like 70-90% of WordPress sites](https://www.wpwhitesecurity.com/statistics-70-percent-wordpress-installations-vulnerable/) are vulnerable to attacks. So, while they boast the statistic of being 2/3 of the web (why not just call it 69% tho), that means that over half of the web is insecure—like a middle school.
- **Instable**: Unexpected spikes in traffic can overload the server with requests and break the site. We've seen this with news sites, high-heat commerce drops (think sneakerhead or video games), intensive retail periods like Black Friday/Cyber Monday, and other windows of extreme traffic.
- **Monotonous**: Many sites can start to look the same (for example in Portland, there are at least a dozen coffee roasters who use the same Squarespace theme—those nuanced beans deserve better, dammit) as the out-of-box options tend to be limited.

### Dynamic Site Extremes

As you can see, the landscape casts two extremes. On one end, you have something lean and agile, but fairly rigid. On the other end, you can have something brilliantly dynamic, but resource-intensive.

This is not a decision you should make based on what you, the developer, likes the most. It needs to be driven by myriad other factors, like who will ultimately be responsible for maintaining the site, what equitably provides as many users as possible users with the bare need, and what will scale and maintain best over time. In short, we should be looking for resiliency over efficiency. Sometimes your hand will be forced; the decision for how to build a news or airline site, which has a lot of dynamic requirements, is a bit more obvious because you lack choice. You have to make it dynamic.

But what about a portfolio site for developer who wants a blog, but doesn't want to have to manually write all the HTML and copy and paste templates each time, nor do they want to feel limited by WordPress (or denying their abject fear of writing PHP and being denied entry into Developer Heaven)?

Or, what about a brochure site for a restaurant who wants to update their menu through a WYSIWYG but doesn't want to pay for the overhead of Squarespace?

Enter:

### Static Site Generator-generated Sites*

>It’s a little confusing because of naming, so please note the difference:
>**SSGs:** Static Site Generators. The thing that generates the site.
>**SSG sites:** The sites that are generated.

Static site generator-generated sites (SSG sites) provide a happy medium between the static sites and dynamic sites. Technically speaking, a site built from an SSG is a still static site.

SSG sites follow the same build process as static sites from above.

1. When users access a site in their browser, the browser requests files from the web server.
2. The web server gathers the files you need for the specific page you requested from a finite list of files that it has stored.
3. The web server sends the files to your browser.
Your browser renders the files and presents you with the website.

Here there’s an added step that happens somewhat separately:

A. The person creating the site generates dynamic inputs, like markup language files, template files, data files, and assets.

B. The SSGs essentially take the actions that would happen on the server-side (like building a post into an HTML file) and perform them before the site is deployed. The SSG takes the dynamic inputs and compiles it into HTML, CSS, and JavaScript—these are the static files that get uploaded to the file server. Hence, the site becomes static.

![Diagram of SSG sites where all elements are from Super Mario to illustrate how static sites are generated. Computer and browser (browser logo is Bowser's eye and eyebrow done in Firefox/Edge style) sends a request (Bullet Bill) to the web server (Thomp). Simultaneously, data/template files (Koopas as Markdown, JSON, and Nunjucks files) are sent to the static site generator (Magic Koopa) who sends generated static files (Koopas dressed as HTML, CSS, and JS files) back to the web server. The web server sends those files to the computer.](../../assets/img/eleventy-i-ssg.jpg)

The benefit of this added step is that it adds some of the developer/creator benefits of dynamic sites (like, writing content in Markdown and reusing templates) without as many of the dynamic cons (like, usually having to load an entire framework) while maintaining the pros of static sites. A Best of Both Worlds™ (BOBW) if you ask me.

**To be explicit:** Neither the user nor the server perceives, typically, the difference between a hard-coded static site and a SSG-generated site. To them, they're both static sites. SSGs improve the *developer* experience. I would even argue it's *optimised* to a certain niche of developer experience.

We have to admit that part of the rise of SSGs is that as developers, we are community-focused and want to be in-line with our peers. It would be dishonest, I think, to say that all of our motivation for anything (especially this) is ever purely user-motivated.

#### SSG Site Examples

New SSGs are popping up every day as this modern approach to tooling becomes more widely adopted. Popular static site generators (and their frameworks/languages) include: [Hugo](https://gohugo.io/) (Go), [Gatsby](https://www.gatsbyjs.org/), [Next.js](https://nextjs.org/), [React Static](https://github.com/react-static/react-static/tree/master/) (React); [NuxtJS](https://nuxtjs.org/) (Vue.js); [Middleman](https://middlemanapp.com/), [Jekyll](https://jekyllrb.com/) (Ruby); [Sapper](https://sapper.svelte.dev/) (Svelte); and my personal favourite, [Eleventy](https://11ty.io) (Node.js).

Examples of *sites* made on these *SSGs* on these can be found on each of those links. (See how the naming convention is confusing?!)

#### Aside: On JAMstack and Humans

In the context of SSGs, you may have heard of JAMstack. JAMstack, which stands for JavaScript, APIs, and Markup, is not a three-tiered peanut butter and jelly sandwich. It is a movement, approach, workflow that was born out of developers wanting to maintain speed and security of static sites while adding some of the richness and tooling of dynamic sites. JAMstack also carries an ethic of performance-driven, low-cost, improved developer experience, and scalability. The hope, I think, is to bring many of the traditionally "backend" capabilities like database manipulation and bring it into the realm of possibility for "front end" developers.

How I like to think of the JAMstack approach is that everything in the world exists on a spectrum. While the line between static and dynamic was once more hard-drawn, the distinction between what constitutes static and dynamic is now more of a continuum. JAMstack further blurs that line or builds that bridge (depending on whether you think this is a good or bad thing).

Simultaneously, for us humans of the web, that means that the line between front-end and back-end development becomes less clear. Certain aspects of back-end development that were once inaccessible to front-end developers are becoming surfaced with movements like JAMstack and the tools they inspire.

>Not all SSGs are part of the JAMstack. The JAMstack is not just about SSGs. (Read more on [JAMstackWTF](https://jamstack.wtf).)

#### SSG Site Pros

- **Developer-Focused:** Hand-coding websites is a pain in the Lance Bass. It's fun to be artisanal for a second, but once you get into dozens (hundreds, thousands) of pages, it becomes frustrating and confusing. On the dynamic side, manipulating WordPress and Squarespace to do all you know is possible can be frustrating (I know that the folks who work on these teams work very hard to improve dev experience as it's a weak spot in most dynamic site generators).
- **Separation of Concerns**: SSG sites maintain the separation of visual presentation and content. You can continue to write new content as Markdown files without manually applying styling to it as you would with a hand-coded static site.
- **Reusable**: Global changes to templates (e.g., blog post template) and components (e,g., navigation) are made by editing one file instead of many.
- **Metadata**: One of the most powerful aspects of SSGs is that it surfaces the metadata: the title of the page, published date, site taxonomy, hero image, etc, can be defined and changed without touching the templates themselves, reinforcing the separation of concerns. Metadata is surfaced in something called front matter, which allows the content maintainer to add and customised data to the literal __front__ of their file. (I'll talk more about this and show examples when we dive into Eleventy's structure in part II.)
- **Lean**: As with a static site, the delivered files are what they are. It takes up less room on the internet, which is minimalist and aligns with our designer ways (rerolls turtleneck collar).
- **Fast:** Lessening the number of server requests means your site will be faster, which improves your SEO and user experience, providing better access to more users.
- **Economic**: Most SSGs are free to set up.
- **Asset Management:** On static sites, asset management is largely manual; you might run individual photos and CSS files through some processes. On dynamic sites, image handling is automated and quite dialed in by way of plug-ins and platform-wide support. Most SSGs include some sort of process for assets, including compiling, transpiling, minifying, and bundling assets. SSGs provide build processes for anything from photo management (serving appropriately sized images) to CSS minification (rewriting your CSS into what the browser needs to read rather than what's optimal for developers to read).
- **Build Customisation:** Most SSGs allow you to manipulate how the build process happens. So, if you want to see the site refresh live as you make edits, that's usually possible. If you want to check for specific linting processes, that's possible too.

#### SSG Site Cons

In addition to the cons from static sites, here are a few more SSG-specific limitations.

- **Complicated Setup**: Atop needing to know the foundational HTML and CSS and some JS, you now need to also have an understanding of command-line interfaces (CLI) and package management to set up your environment. **This is no small feat and creates a massive barrier to entry.** Every SSG I've ever tried to set up has been confusing. I've learned that even the most competent developers can struggle with this initial step of the process.
- **Choice Overload**: Modern development's embrace of SSGs means there are many SSG choices across many languages and language libraries. While this is generally a good thing, it can make it VERY confusing and intimidating if you don't already have a language loyalty. How do you pick which SSG when you don't know if you want to learn JS or Ruby or what?
- **Niche Skillset**:
  - While WordPress and Drupal developers tend to be more abundant, developers who are versed in using SSGs tend to be fewer (partly because the application of the technology is relatively new, comparatively). You could find yourself using an SSG without someone to update it, which is a risk.
  - Some developers become developers of a specific SSG, like "Gatsby developers", which tethers their economic success to a specific framework. I **personally** think this can be risky. As each framework is nuanced, learning can pigeon-hole you if you're not careful (same problem as becoming a WordPress developer, for example).
- **Limited**: While some possibilities are possible (and increasingly so by way of movements like JAMstack), adding user-generated content or real-time-influenced data is still not really possible. The more complex your desires, the more you're going to have to hack the SSG to do what you want. This increases barriers to entry and instability.
- **Slow Build Times:** As you're building everything pre-deploy, you have to rebuild the entire website. As you may well know, waiting for a SSG to load all of its npm packages is time-consuming. On top of that, if you have a large blog or asset-intensive website, you will have to wait for it to build when you're developing. It's a buzz kill (but better our dev team than millions of users...right? RIGHT.).
- **Gatekept**: Without a CMS, you have to know how to write code to publish content. Most SSGs require you to know some sort of templating language, at minimum, like Markdown.

### Why Eleventy

~~As a developer advocate for Eleventy**,~~ I favour Eleventy for most smaller projects because the way it was built aligns with my personal developer ethos. I do not like serving the user a bunch of unnecessary JavaScript to serve what will inevitably be static content.

Eleventy's mission seems to possess some similar biases to me. In the end, this is a huge factor in what we look for as developers, whether we admit it or not.

(**Also so the creator, Zach, doesn't get mad at me, Eleventy doesn't actually have developer advocates and is a community-contributed and -funded project. If you find Eleventy helpful and can, [throw a few bucks at them](https://opencollective.com/11ty)!

#### Pros

- **Performance-First:** Eleventy is very lean. It doesn't take 30 minutes to build my Eleventy site.
- **Community-Driven:** As much as possible, I try to use tools that have a supportive community around them.
- **Independent:** I try to support projects that don't fund and/or evangelise multi-billionaire companies (though I possess no judgment around this because I think we all gotta make a living).
- **Language Agnostic:** While Eleventy's functionality is written in Node.js, the templating is very flexible, accepting Markdown, HTML, JS, Nunjucks, or any hot mess combination of all of them if you thrive in chaos (which you can see that I do if you look at my own website source code, thank you very much.)
- **Fast Build Times**: I hate waiting for my site to build as a developer. If I wanted to wait for the internet, I'd get dial-up again. Jokes aside, build time and delay can be a major downside of sites on massive dynamic frameworks. Luckily, Eleventy is so lean and most of the sites I choose to build on Eleventy are too. (It's important to note that any SSG built atop a framework, like NuxtJS (Vue.js) or Gatsby (React) means that you'll have to wait for those frameworks to build, which can take time.)
- **Friendship**: I consider Zach a friend. I like to support my friends and what they build.

#### Cons

- **Limited Tooling**: As Eleventy is small and community-driven (without massive corporate backing), it doesn't have as much tooling support as, say Gatsby. Whereas Gatsby has some pretty cool/sophisticated image handler, handling images in Eleventy is somewhat bare-bones.
- **Sparse Documentation:** Again, because it's small and community-funded and -maintained, the documentation is sparse. I get the sense that because Eleventy was initially marketed as an alternative to Jekyll, much of the documentation presumes Jekyll (reminder, it's another SSG) familiarity and competency. I found the barrier to entry quite high for me post-install, even though I have a fairly solid grasp on development and templating.
- **Limited Tutorials and Examples**: Some community-generated tutorials exist for Eleventy, but not to the extent of some of the larger SSG communities.

To me, the pros outweigh the cons. Developers who work in and support Eleventy can help to improve the two cons. This is why I'm writing this series.

>Next Time (Part II): I will teach you how to install Eleventy (and, all the things you need to to install in order to install Eleventy).

#### Thank You

Thank you to [Tierney Cyren](https://www.twitter.com/bitandbang) and [Heidi Olsen](https://www.twitter.com/SwissWebMiss) for their invaluable contributions as editors.

#### References

[CSS Tricks: The Power of Serverless](https://serverless.css-tricks.com)
[Eleventy Docs](https://www.11ty.dev/docs/)
[JAMstack.org](https://jamstack.org/)
[KeyCDN: Difference between Static and Dynamic Sites](https://www.keycdn.com/support/difference-between-static-and-dynamic)
[Netlify: Top Ten Static Site Generators of 2017](https://www.netlify.com/blog/2017/05/25/top-ten-static-site-generators-of-2017/)
[Sitepoint: 7 Reasons to use a Static Site Generator](https://www.sitepoint.com/7-reasons-use-static-site-generator/)
[Bejamas: Wordpress Alternative: The Pros and Cons of Static Site Generators](https://bejamas.io/blog/wordpress-alternative/)

#### Questions and Corrections

For questions, please [reach out on Twitter](https://www.twitter.com/TatianaTMac)! I can't promise to answer all your questions, but I'll try my best!

For corrections (typos, factual inaccuracies), please file a [GitHub issue](https://github.com/tatianamac/tm11ty/issues).