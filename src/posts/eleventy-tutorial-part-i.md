---
title: Beginner's Guide to Eleventy (Part I)
description: What is a static site generator? (Part I)
summary: Modern web tooling includes understanding static site generators. Static site generators, when used thoughtfully, can serve sites that need something in the middle; in the vast expanse need between static, hand-coded sites and dynamic behemoths. In a multi-part guide, I'll show you how to approach tooling.
date: 2020-03-31 16:09:03
tags:
  - tutorial
  - Eleventy
layout: layouts/post.njk
bgColor: blush-pink
navClass: bg-blush-pink
colorMode: dark
---
## What is and why should I use a static site generator?

Many folks have expressed interest in [Eleventy](https://www.eleventy.io)—and static site generators (SSGs) in general—but find them challenging to set up compared to dynamic generated sites like those built with WordPress, Drupal, Squarespace, Shopify, etc. My hope with this guide is to remove barriers, particularly written for designers/developers who:

1. want the flexibility of a content management system (CMS), but feel limited by what-you-see-is-what-you-get (WYSIWYG) tools or don't want all the weight/vulnerability;
2. feel comfortable HTML and CSS and want to explore more, but feel intimidated by the set-up process that SSGs require.

Part of removing barriers is providing adequate context. To accomplish this, I will break this into a multi-part series. I am being intentionally verbose. I might explain things you already know. Congratulations. Here is a trophy. 🏆

Philosophically I want to remove as many barriers to entry as possible. In general, I think our industry has a fear of overexplaining concepts we presume people to have, which unfortunately means a lot goes unsaid that I believe should go said. Without explicitly saying the "basics," beginners have a hard time grasping any foundation. You can send beginners away to other articles, but that can cause complications for neurodivergent folks who are now being sent on a wild goose (HONK) chase.

To organise this multi-part series:

- **Part I:** What is a static site generator?
  *Start here if you want to understand the context for the web.*
- **Part II:** Installation/Structure (coming soon)
  *[Start here if you already understand the context for the web and just want to get to it.* You will be able to this once this is written lol]
- **Part III:** Basic Customisation (coming soon)
- **Part IV**: Advanced Customisation  (coming soon)

————

Before we dive into the tactical how-to (which you will find in Part II), I want to provide what I feel like is some much-needed context as to why you might pick a static site generator (SSG) at all. Let's be real, what the fork IS even an SSG (it's not a Star Trek series as I once thought), how SSGs compare to other approaches, the costs/benefits to this choice, and lastly, and lastly, why I choose Eleventy over others.

## The Landscape: 

Generally speaking, there are two types of sites,

- Static sites and
- Dynamic sites.

Static-site generated sites are technically a sub-category of static sites, but they're a *special* type. More on that later. Dynamic sites include sites built atop a framework, like WordPress or Drupal.

### Static Sites

Static sites store the information needed to serve the site (HTML documents, images, scripts) on a server (usually whomever is paid to "host" the site). When users access the URL in their browser, it downloads the information and sends you the packages of information. Your browser then renders it. Theoretically, everyone should receive the same information.

The [first website launched in 1990](http://info.cern.ch/hypertext/WWW/TheProject.html) by Sir Tim Berners-Lee was a static site with just HTML.

#### Examples

Static sites are most any site when we think of "basic" or "hard-coded sites" (though those are not the ony ways to generate static sites; more on that later).

#### Pros

- **Fast**: Static sites are predictable; it know what you're going to ask it, and thus, requires no client-side server requests, no database queries, etc., which makes the request fast. It's like the fast food of scripts.
- **Lean**: Sites aren't as resource-intensive, so if you have an unexpected surge in traffic, static sites are usually able to handle this better.
- **Secure:** As there are no entry points (like in dynamic sites), static sites are much more secure.
- **Economic:** Since you aren't usually paying for someone to host the dynamic infrastructure, you're usually just paying for the hosting of your static assets, which is inexpensive compared to dynamic sites that require maintaining a service (like Squarespace).
- **Controllable:** With a static site, whomever makes it has a lot more relative control over how the site generated.

#### Cons

Note that there are workarounds for all of these cons. For scope of article, **I've left out the tools that address/esrve some of these cons.** Some of them will be addressed in the SSG section, so hold your commenting horses (ya neigh-sayers), and note that I can't talk about everything in this one article.

- **Limited**: Static sites can't do things more complex things that take for granted, like buying things online, getting weather for our location, etc.
- **Server Requirements**: To run WordPress, special servers like Apache or NGINX are required. As with all things, there is a cost associated with this, which typically get passed down the chain. To locally run a WordPress site (so that you're not making the edits live on the web), you need to do some manipulation to your machine, which can be confusing.
- **Gatekept:** Requires knowledge of HTML/CSS/JS to create and to update it, making developers into the content overloads/servants (depending on your org structure 😂).
- **Non-dynamic:** Everyone receives the same content, regardless of things like geolocation, time of day, etc.
- **Difficult to scale:** For example, your global header is copy and pasted onto each page. Updating something could mean updating hundreds of pages, which is resource-intensive, rife for mistakes, and boring AF.
- **Inconsistent:** Can be inconsistent if the people building and maintaining aren't meticulous or lack adequate resources and quality assurance.
- **Inputless**: No log-ins (accounts), inputs (forms).
- **Not Version-Controlled:** While services can help this, if you do not set this up, overwriting your files on the server mean that they're overwritten forever. Reverting will require that you maintained some version controlling on the creator side.

### Dynamic sites

While making a bunch of static sites accessible by thousands of users was a huge invention, it wasn't enough. Clicking around on a bunch of static pages made the user experience quite monotonous and undiscoverable.

Dynamic sites were introduced in 1993 with the advent of the Common Gateway Interface (CGI also, confusingly, but not Computer Generated Imagery, which is what makes Michael Bay movies *pop*). Fun fact: CGI's logo resembles the album cover for Pink Floyd's *Dark Side of the Moon*. But I disambiguate.  [On a serious note: One could argue that applications and programs like Dreamweaver and FrontPage were the first static site generators that used a WYSIWYG editor. For brevity, I'm leaving that part of the history out.]

In the barest terms, CGIs add a layer of complexity to how websites are served to you via browers. CGIs act as a translator between your browser and the server.

- Receive information from the HTTP request based on the input you provide. Sometimes that input is explicit (like, you logging in) and other times it's implicit (like your geolocation being taken psasively directly from permissions you've granted);
- Execute programs/scripts to pull together what you requested;
- Send back what you requested.

Dynamic sites opened up a whole world of the internet that was not possible before, customising the experience, introducing complexity in the process.

#### Examples

Dynamic sites are *everything else—any site that serves you a website from a database an experience based on input, whether that be shopping carts, search or content queries, location data, user data, etc. Most "complex" sites tend to be dynamic sites; think Amazon, Facebook, Pinterest. (Most websites that are also a product tend to be dynamic.)

Sites that are generated by content management systems (CMSes) are also dynamic, so that means WordPress, Squarespace, Shopify, etc.

#### Pros

- **Powerful:** Allow for integration of content management systems (CMSes), eCommerce platforms, etc. and more complexity in general, taking the web from just a content storage platform, to a living, breathing information hub that can serve us based on variables. That's pretty cool.
- **No/Low-Code:** The addition of CMSes and eCommerce platforms means that code no longer becomes a requirement to create a site, lowering the barrier to entry, and also the cost of maintenance goes down, as it only requires familiarity with the editor interface (dashboard), which tend to be more graphical and remove abstraction.
- **Dynamic, duh:** As the name suggests, the power comes in generating content based on specific requests or data gathered (some of that data is gathered duplicituously and/or without consent, but a topic for another day)
- **Easier Set-up:** With platform integration, installing and launching a site becomes a lot faster. Products like Squarespace and Shopify boast the time to launch as a feature. Generating a static site takes time.
- **Scalable**: Adding more data or content already has a workflow and a place to store it (for example, you can import a thousand posts from another blogging platform or user data in a comma-separated values (CSV) file instead of manually entering it).
- **Consistent:** As things like blog posts require an infrastructure, you can count on the way each product to appear consistently based on the rules you set out.
- **Search Engine Optimisation (SEO)-Focused**: Most CMSes are tailored to "business needs", which means that out of box, they tend to reveal ways to improve your SEO.
- **Version-Controlled**: Most platforms integrate some sort of version controlling, so content can be reversed if an error is made.

#### Cons

Note that there are workarounds for all of these cons (and where appropriate, I've noted them) and some of them will be addressed in the SSG section, so hold your commenting horses.

- **Costly**: Convenience comes at a price. While WordPress itself is free, themes and other add-ons can start to add up. Monthly paid services like Squarespace and Shopify can be cost-prohibitive to many people, and become exponentially costly as you want to add features for growth. Developers who specialise in these frameworks can also charge a premium as their skills tend to be niche.
- **Resource-Intensive:** Every time a WordPress site is loaded, it has to call the server and ask for any scripts, plug-in libraries, etc. The time it takes to load these scripts can be long and require a lot of bandwidth.
- **Slow**: All of the inputs and dynamic calls result in having to wait for the server to do its job. We all know what that's like; when you're waiting for a colleague to finish their task before you can finish yours. Any delays in speed result in disengaged/unhappy users and thus, negatively impacted SEO measurements.
- **Cache-Difficult:** Caching provides major benefits to sites. Caching basically stores a copy of the site somewhere else (whether that be on your computer in a temporary file) or on another server (like a content delivery network (CDN)). Doing so takes one load off of the main server you're accessing. However, caching becomes very complex when the server isn't __quite__ sure even which HTML or images it should serve you because the variables are too vast (Are you logged in? Did you change some setting? Is there something in your cart? Did someone comment since you last logged in? Are you cute? *How* cute?)
- **Inaccessible:**
  - Heavy sites mean that users who rely on phone data (and pay per megabyte) are being economically taxed for accessing your site. In regions and contexts with systematically slower internet speeds, your users will likely bounce if your site is too slow. Remember, this is your fault for building a site maximised for 5G internet, not your user's inability to purchase an iPhone 14.
  - While a static site does not guarantee accessibility and you *can* make dynamic sites accessible, dynamic sites make out-of-box accessibility far more complex. A few static HTML pages will likely be fairly accessible as there's not much to them and HTML is fairly generous. However, the accessibility of a dynamic site becomes reliant on the accessibility of a platform on which it's built. The tools used to build the site (like the dash) need to be accessible as does the site itself. Any layer of complication increases the dimension of accessibility exponentially.
- **Insecure:** Dynamic sites have to allow for input, which means that they open the doors for bugs and viruses. Something like 70-90% of WordPress sites are vulnerable to attacks. So, while they boast the statistic of being 2/3 of the web (why not just call it 69% tho), that means that over half of the web is insecure—like a middle school.
- **Instable**: Unexpected spikes in traffic can overload the server with requests and break the site. We've seen this with news sites, high-heat commerce drops (think sneakerhead or video games), etc.
- **Monotonous**: Many sites can start to look the same (for example in Portland, there are at least a dozen coffee roasters who use the same Squarespace theme—those nuanced beans deserve better, dammit) as the out-of-box options tend to be limited.

As you can see, the landscape casts two extremes. On one end, you have something lean and agile, but fairly rigid. On the other end, you can have something brilliantly dynamic, but resource-intensive.

The decision is obvious for something like a news or airline site because you lack choice. You have to make it dynamic. 

But what about a portfolio site for developer who wants a blog, but doesn't want to have to manually write all the HTML and copy and paste templates each time, nor do they want to rely on WordPress? Or, what about a brochure site for a restaurant who wants to update their menu through a WYSIWYG but doesn't need the blogging component of WordPress or to pay for the interface of Shopify or Squarespace?

Enter:

### Static Site Generator-generated sites*

Static site generator-generated sites (SSG sites, henceforth*) provide a happy medium between the basic static sites and dynamic sites. Technically speaking, a site built from an SSG is a static site.

SSGs essentially take the requests that would happen on the server-side (like building a post into an HTML file) and perform them *before* the site is deployed. The SSG takes inputs like Markdown files, templating files, data, and writes it into HTML, CSS, and JavaScript—these static files get uploaded.

The benefit of this is that it adds some of the developer/creator benefits of dynamic sites (like, writing content in Markdown and reusing templates) without as many of the dynamic cons while maintaining the pros of static sites. A Best of Both Worlds™ (BOBW) if you ask me.

To be explicit: Neither the user nor the server perceives, typically, the difference between a hard-coded static site and a SSG-generated site. To them, they're both static sites. SSGs improve the *developer* experience. I would even argue it's *optimised* to the developer experience.

We have to admit that part of the rise of SSGs is that as developers, we are community-focused and want to be in-line with our peers. It would be dishonest, I think, to say that all of our motivation for anything (especially this) is user-motivated.

*Just let me be pedantic about the name, okay? I know it's awkward.

#### Examples

New SSGs are popping up every day as this modern approach to tooling becomes more widely adopted. Examples of popular static site generators (and their frameworks/languages) include [Hugo](https://gohugo.io/) (Go), [Gatsby](https://www.gatsbyjs.org/), [Next](https://nextjs.org/), [React Static](https://github.com/react-static/react-static/tree/master/) (ReactJS); [Nuxt](https://nuxtjs.org/) (VueJS); [Middleman](https://middlemanapp.com/), [Jekyll](https://jekyllrb.com/) (Ruby); [Sapper](https://sapper.svelte.dev/) (SvelteJS); and my personal favourite, Eleventy (NodeJS).

Examples of *sites* made on these *SSGs* on these can be found on each of those sites. (See how the naming convention is confusing?!)

#### Aside: On JAMstack and Humans
In the context of SSGs, you may have heard of JAMstack. JAMstack, which stands for JavaScript, APIs, and Markup, is not a three-tiered peanut butter and jelly sandwich. It is an movement, approach, workflow that was born out of developers wanting to maintain speed and security of static sites while adding some of the dynamic richness and tooling of dynamic sites. JAMstack also carries ethic of performance-driven, low-cost, improved developer experience, and scalability. The hope, I think, is to bring many of the traditionally "backend" capabilities like database manipulation and bring it into the realm of possibility for "front end" developers.

How I like to think of it is is that everything in the world exists on a spectrum. While the line between static and dynamic was once more hard-drawn, the distinction between what consistutes static and dynamic is a continuum. JAMstack further blurs that line or builds that bridge (depending on whether you think this is a good or bad thing).

Simultaneously, for us humans of the web, that means that the line between front-end and back-end development becomes further blurred. Certain aspects of back-end development that were once in accessible to front-end developers is becoming surfaced with movements like JAMstack. 

Not all SSGs are part of the JAMstack. The JAMstack is not just about SSGs. (Read more on [JAMstackWTF](https://jamstack.wtf).)

#### Pros

- **Developer-Focused:** Hand-coding websites is a pain in the Lance Bass. Like, sure it's fun to be artisanal for a second, but the moment you get into dozens of pages (let alone hundreds), it becomes frustrating and confusing. Also as hard as their teams work on the DX, manipulating WordPress and Squarespace to do all you know is possible can be frustrating. 
- **Separation of Concerns**: SSG sites maintain the separation of visual presentation and content. You can continue to write new content as Markdown files without manually applying styling to it as you would with a hand-coded static site.
- **Resusable**: Components can be reused with template literals. Global changes to navigation and such are made by editing one file instead of many.
- **Meta Data**: One of the most powerful aspects of SSGs is that it surfaces the meta data. What this means is things like the title of the page, the date it's published, taxonomy of the site, hero image, etc, can be defined and changed without touching the templates themselves, reinforcing the separation of concerns. The meta data is surfaced in something called front matter, which allows the content maintainer to add and customised data to the literal __front__ of their file. (I'll talk more about this and show examples when we dive into Eleventy's structure in part II)
- **Lean**: As with a static site, the delivered files are what they are. It takes up less room on the internet, which is minimalist and aligns with our designer ways.
- **Fast:** Lessening the number of server requests means your site will be faster, which improves your SEO and user experience, providing better access to more users.
- **Economic**: Most SSGs are free to set up.
- **Asset Management:**  In CMSes like WordPress, much of this happened in the dashboard upon upload. In static sites, asset management is largely manual; you might run individual photos and CSS files through some processes, but you, human, have to do that. Most SSGs include some sort of process for assets, including compiling, transpiling, minifying, and bundling assets. Said another way, SSGs provide build processes for anything from photo management (serving appropriately sized images) to CSS minification (rewriting your CSS into what the browser needs to read rather than what's optimal for developers to read).
- **Build Customisation:** Most SSGs allow you to manipulate how the build process happens. So, if you want to see the site live as you make edits, that's usually possible. If you want to check for specific linting processes, that's possible too.

#### Cons
In addition to the cons from static sites, here are a few more SSG-specific limitations.

- **Complicated Set-Up**: Atop needing to know the foundational HTML and CSS and some JS, you now need to also have an understanding of command-line interfaces (CLI) and package management to set up your environment. **This is no small feat.** Every SSG I've ever tried to set up has been confusing. I've learned that even the most competent developers can struggle with this.
- **Choice Overload**: Modern tooling's embrace of SSGs means there are many SSG choices across many languages. While this is generally a good thing, it can make it VERY confusing and intimidating if you don't already have a language loyalty. How do you pick which SSG when you don't know if you want to learn JS or Ruby or what?
- **Niche Skillset**:
  - While WordPress and Drupal developers tend to be more abundant, developers who are versed in using SSGs tend to be fewer (partly because the application of the technology is relatively new, comparatively). You could find yourself using an SSG without someone to update it, which is a risk.
  - Some developers become "Gatsby developers", which tethers their economic success to a specific frameowrk. I personally think this can be risky for a number of reasons. As each framework is nuanced, learning can pigeon-hole you if you're not careful (same problem as becoming a WordPress developer, for example).
- **Limited**: While some possibilities are possible (and increasingly so), adding user-generated content or real-time-influenced data is still not really possible. The more complex your desires, the more you're going to have to hack the SSG to do what you want. This increases barriers to entry.
- **Slow Build Times:** As you're building everything pre-deploy, you have to rebuild the entire website. As you may well know, waiting for a SSG to load all of its npm packages is time-consuming. On top of that, if you have a large blog or asset-intensive website, you will have to wait for to build when you're developing. It's a buzz kill (but better our dev team than millions of users...right?).
- **Gatekept**: Without a CMS, development knowledge is required to publish content. Most SSGs require you to know some sort of templating language, at minimum, like Markdown.

### Why Eleventy?

~~As a developer advocate for Eleventy**,~~ I favour Eleventy for most smaller projects because the way it was built aligns wtih my personal developer ethos. I do not like serving the user a bunch of unnecessary JavaScript to serve what will inevitably be static content.

Eleventy's mission seems to possess some similar biases to me. In the end, this is a huge factor in what we look for as developers, whether we admit it or not.

(**Also so Zach doesn't get mad at me, Eleventy doesn't have actually have developer advocates and is a community-contributed and -funded project.)

#### Pros

- **Performance-First:** Eleventy is very lean. It doesn't take 30 minutes to build my Eleventy site.
- **Community-Driven:** As much as possible, I try to use tools that have supportive community around it.
- **Independent:** I try to support projects that don't fund and/or evangelise multi-billionaire companies (though I possess no judgment around this because I think we all gotta make a living).
- **Language Agnostic:** While Eleventy's functions themselves are written in NodeJS, the templating is very flexible, accepting Markdown, HTML, JS, Nunjucks, or any hot mess combination of all of them if you thrive in chaos (which you can see that I do if you look at my own website source code, thank you very much.)
- **Fast Build Times**: I hate waiting for my site to build; this is a major downside of SSGs. Luckily, Eleventy is so lean and most of the sites I choose to build on Eleventy are too.

#### Cons

- **Limited Tooling**: As Eleventy is small and community-driven (without massive corporate backing), it doesn't have as much tooling support as, say Gatsby. Whereas Gatsby has some pretty cool/sophisticated image u
- **Sparse Documentation:** Again, because it's small and community-funded and -maintained, the documentation is sparse. (I have a lot of compassion for this as a fellow OSS maintainer). I found the barrier to entry quite high, even though I have a fairly solid grasp on things in this realm.
- **Limited Tutorials**: Some tutorials exist for Eleventy, but not to the extent of some of the larger 

To me, the pros outweigh the cons. Developers who support Eleventy can help to improve the two cons. This is why I'm writing this series.

#### References
[CSS Tricks: The Power of Serverless](https://serverless.css-tricks.com)
[Eleventy Docs](https://www.11ty.dev/docs/)
[JAMStack.org](https://jamstack.org/)
[KeyCDN: Difference between Static and Dynamic Sites](https://www.keycdn.com/support/difference-between-static-and-dynamic)
[Netlify: Top Ten Static Site Generators of 2017](https://www.netlify.com/blog/2017/05/25/top-ten-static-site-generators-of-2017/)
[Sitepoint: 7 Reasons to use a Static Site Generator](https://www.sitepoint.com/7-reasons-use-static-site-generator/)
[Bejamas: Wordpress Alternative: The Pros and Cons of Static Site Generators](https://bejamas.io/blog/wordpress-alternative/)