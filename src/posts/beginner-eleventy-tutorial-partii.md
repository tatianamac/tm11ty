---
title: Beginner's Guide to Eleventy
description: "Part II: Installation and Structure"
summary: In the second installment of a four part guide, I show you how to install Eleventy—except I walk through each grueling step.
date: 2020-04-10 12:09:03
layout: layouts/post.njk
bgColor: white
navClass: bg-white
colorMode: dark

---

## Welcome to Part II

>You are reading Part II of a IV part series.
>**Part I:** [What is a static site generator?](../beginner-eleventy-tutorial-parti/)
>**Part II:** **Installation/Structure** 👈🏽 You are here
>**Part III:** Basic Customisation (coming soon)
>**Part IV:** Advanced Customisation (coming soon)
>If you are confused or in need of context, please go [read Part I](../beginner-eleventy-tutorial-parti/)—it is where I establish all the context of what static site generators are.

As much as possible, I'm going to treat this part of the tutorial like a cookbook, except I won't make you read seven paragraphs about that one summer I spent in Emilia Romagna rolling the perfect tortellini as I had a torrid tryst with Paolo (sorry, reading too many romance novels).

I will, however, tell you all of the "ingredients" you need, dirty my hands with the scary parts, take it step by step, and ensure that I provide ample resources to prevent you from hitting dead ends.

Let's collectively admit something: We are not great at giving robust and clear installation instructions. More often than not, our package installation instructions look something like this:

*Installation:*
`npm i luigis-castle`
*You're set!*

*I'm sorry, what? Where do I... put that? Then, what?* Even if I know where to put that, I now have this cyborg telling me that I'm missing __several trillion dependencies__? I'm sorry, are you telling me to go to therapy? I already do, and therapy is awesome, sucker.

I want to prevent *that*.

So, you might find that this guide is `--verbose`. It is intentionally so because most of the time we're overly concise and people give up at the very beginning. I've partitioned explanations into notes where I can, so you can choose to skip over them if you already know everything. Cool? Oh, you want a cookie. Here. 🍪

Let's get started.

## Tools Required for Eleventy

A developer's tools can be personal. To some degree, if you choose well _for you_, a tool can really help speed up rote tasks, give you fewer headaches (by providing more colour customisation and modes), and create a more pleasant developer experience (DX).

Some developers have strange infatuations with tools and will insist some are better than others—10x developers might even make fun of you if you use the wrong tools. I think it's more personal than that. Picking out dev tools is like picking out a sports bra. Try out a bunch. See what sucks the least for you that you can get in and out of without breaking your arms. Learn how to customise them so you're less likely to have a uniboob. Abandon them in the back of a drawer if they don't work.

1. **Terminal Emulator**
  Terminal emulators (or Terminal or Term, if you're friends) are the bare bones text tools that make you look most like a hacker. If you've ever opened up Terminal on Windows or MacOS, you were in the terminal emulator. Terminal emulators are essentially stripped-down programs without much of a visual interface that can give you access to your own computer and connect you to other computers.

    Inside of the terminal emulator, you are using the **Command Line Interface (CLI)**. By comparison, most programs that we use day to day, like Microsoft PowerPoint, Adobe Illustrator, Sketch, Microsoft Paint, are all considered **Graphical User Interfaces (GUIs)**. In GUIs, you can see a visualisation of what you're doing. When working in a CLI, you are using text commands and relying on text output, which can be harder for many to visualise.

    Terminal emulators can do a lot, but for the purposes of this tutorial, you'll mostly be using it to download and to run Eleventy, to manage your packages (heh), and to version control your code.

     **Examples:** [Hyper](https://hyper.is/), [iTerm2](https://iterm2.com/), Terminal (default for MacOS and Windows).

     **Cues**: Many tutorials are not always explicit about when you're using the Terminal. Usually if you're cued to `run`, `build`, `npm`, `npx`, `homebrew`, `yarn` etc, and you see a short block of text like this, often preceded by a `$` (which you should not copy):

     `$ npm i make-me-a-sandwich-mario`

     You're going to paste that in your Terminal and hit return/enter to _run_ it.

    1b. **Shell Language**
    When you run scripts and commands in your terminal emulator, you do so by writing in a shell or command language. The default language for Linux and older MacOS (pre-Mojave) is Bash and newer MacOS is zsh.

    I mention this here because this is a future potential "gotcha" where you can get slipped up because a installation guide for a package manager can presume you are using one or the other. While they are very similar, there are slightly differences that can cause headaches. It's important to know which you're using and [general differences](https://linuxhint.com/differences_between_bash_zsh/).

    If you have never interacted with your terminal's shell language, I recommend figuring out which is your default. To do so, open your terminal emulator, and _run_ (paste in this code and hit enter) this command `ps -p $$`. It should tell you spit out something like this below:

    ```
    PID TTY           TIME CMD
      12345 ttys001    0:00.11 /usr/local/bin/zsh --login
    ```

    If you see `zsh`, `bash`, `tcsh`, `ksh` (anything ending in sh), that's your shell language. (If that didn't work for you, [try some of other commands](https://linuxhandbook.com/shell-using/).)

    1c. **Installing Node.js and npm**
    Node is a **environment** you need to install onto your computer in order to run Node Package Manager (npm). (You need npm to install Eleventy—the whole point of this post. Did you forget? I sorta did!).

    To check if you already have node on your machine, run the following command in your terminal:
    `node -v` or `node --version`. (If one doesn't work, try the other).

    If it returns `v` followed by numbers, something like `v12.13.1`, that means you have Node installed. Woohoo!

    If you get anything other than that, that means that you don't have it on your computer.

    Follow the instructions below for your operating system, and come back here once you do.

    For [MacOS](https://nodesource.com/blog/installing-nodejs-tutorial-mac-os-x/).
    For [Windows](https://nodesource.com/blog/installing-nodejs-tutorial-windows/).

    Once you have Node.js installed, you can now install npm.

    1d. **Installing npm**
    npm is the main package manager for Node.js; they have a registry of all the packages and modules which is accessed by a command line interface. Think of it as the central library of code snippets that everyone can "borrow" at once. npm makes it so that you can search for specific features you need to add, like a React image carousel or a static site generator, like Eleventy!

    >Packages can rely on other packages, which is called a dependency. You will come across that word _a lot_. A dependency means that a package (let's call it House Package) uses another package (let's call it Room Package). Sometimes, when Room Package makes an update, it can break House Package. Sometimes the maker of Room Package decides to remove it from the registry or make a change that isn't compatible with House Package. That means House Package can break. Now imagine this incepted from House, into Street, Neighbourhood, into City, into State, into Country, into Continent! One small change can impact many pieces of software, and frankly, take an entire sector of software down. So, it's important to be mindful when you're engineering of all the dependencies you invite in, and to monitor them.

    If you installed Node.js, then you should have npm installed. To check which version, in your terminal emulator, run:
    `npm -v` or `npm --version`. (If one doesn't work, try the other).

    If it returns anything newer than `v8...` (so, greater than), then you are all set!

    If it returns anything older than `v8...` (so, less than), then you need to upgrade. To upgrade, in your terminal emulator, run:
    `npm install npm@latest -g`

2. **Source-Code Editor**
   Source-Code Editors (or just Code Editor if you're friends) are where you edit code or *make the magic happen* as I like to say. The code editor is also where you can look like a hacker.

  Choosing a code editor can be really daunting, as everyone who has a four-letter name has a strong opinion about which is the best and is willing to go to great lengths to convince you.

  If you're starting out with code, my recommendation would be to pick the one that stresses you out the least. Look at the screenshots and read reviews. Consider what customisations are for your needs, say, like if [you're blind](https://www.reddit.com/r/Blind/comments/fjn9d9/code_editor/). See what seems appealing to spend hours crying in front of. For many years, I wrote in Coda (RIP), Sublime, Atom, then now I'm in Microsoft Visual Studio Code (VSCode). However, I think if I started in VSCode, I would have been overwhelmed with all the bells and whistles.

  **Examples**: GitHub's [Atom](https://www.sublimetext.com/), Adobe's [Brackets](http://brackets.io/), [Notepad++](https://notepad-plus-plus.org/), [Sublime](https://www.sublimetext.com/), [Vim](https://vim.org/) if you hate yourself and wear purist badges proud (jk! No tool shaming), Microsoft [Visual Studio Code (VSCode)](https://code.visualstudio.com/)

  **Cues**: If you see longer blocks of code, you're going to likely edit that in your code editor.

>You might hear someone refer to their **Integrated Development Environment (IDE)**. People sometimes use IDE interchangeably with code editor, when they are not, in fact, interchangeable. By definition, IDEs comprise a code editor, build automation tool, and debugger. Sometimes they have GUIs integrated into them as well.
>Most tools you hear about are code editors, including Microsoft Visual Studio Code (VSCode or just Code if you're good friends), which, while robust and full-featured with the help of extensions, is not an IDE. Microsoft's Visual Studio is their IDE. Naming, am I right?
>Also, because people tend to get their panties wound up in sailors' knots about this, you're not any "less" of a developer for using a code editor or an IDE—use what you like and change it up if you change your mind. Neither is intrinsically better than the other; they're both valid for different developers in different contexts. Some IDEs/code editors have better support for certain languages, for instance. That's the sort of thing you should note for how you decide, not what some Chadwick tells you to decide.
For the purposes of what we're doing, I'd recommend that you get a **code editor** as it will suffice for this project.

3. **Browser**
   You probably already use a browser regularly. In fact, I would be willing to bet you're accessing this post from a browser. However, the browser that you use day to day to surf might be different than the one you choose to use when developing.
   
   While we should all test our sites across multiple browsers, I think most of us will conduct the majority of our build within the browser we feel most comfortable with initially. To me, the choice of what main browser to use to do the majority of my development in comes down to what the audience is most likely to use (this is one of many areas where user research is critical!). If no compelling user-driven decision exists here, like if it's for my personal site, where I don't collect user data, it typically comes down to the Developer Tools and Extensions I care most about.
   
   Personally, I use Firefox equipped with DuckDuckGo as my search engine for most of my browsing (because security and privacy are very important to me for personal browsing), but I recognise that's a small user share. I sometimes use Firefox Nightly so I can take advantage of cutting-edge features. (Firefox Nightly is not stable, though, so it's only used for this purpose). I develop primarily in Firefox and Chrome. (I prefer Firefox's DevTools and Chrome performance tooling [Lighthouse]. Play around with the Developer Tools of multiple browsers. See which one's interface makes the most sense to you.

   **Examples**: __Desktop__: Brave, Google Chrome, Microsoft Edge, Mozilla Firefox, Apple Safari, UCBrowser, etc. __Mobile__ Google Chrome, Opera, Opera Mini, Apple Safari, Samsung Internet.

4. **Git**

Git is an open-source, free distributed version control system. Git enables you to take snapshots of your code, so that if you break it, you can revert to when your code was functioning. It's like the Delorean for code.

When you think of Git, you might think of BitBucket, GitHub, or GitLab. Technically, all those products offer **Git server as a service;** hosting the storage to store the code is the service.

Git can be accessed from a terminal emulator, a desktop GUI, or a web app (and a combination of all three). Most developers primarily rely on accessing it through their terminal emulator, as GUIs can be limiting (and not all Git hosts offer them).

Git is without a doubt one of the most intimidating parts of being a developer. For visual folks, it can be hard to understand what is going on under the hood. Git commands are sometimes obtuse. Working on massive code bases with large teams can exacerbate these fears.

Git is something that generally becomes more intuitive as you practice. Practice, practice, pratice. I recommend using it on your own small projects. Allow yourself to make mistakes and learn how to get yourself out of them. [OhShitGit](https://www.ohshitgit.com) is one of my favourite resources for when I get stuck and feel that git-sweat come on.

And, though practice helps, know that even the most seasoned developers _royally fork_ (SORRY) up their repos sometimes. It's okay. It's this weird thing we all do so we can commiserate over it, like burpies or taking out the trash. Most things you do are reversible. If you're worried at first, there is no shame in copying your entire folder somewhere else _just in case._ There's a saying about something not being backed up unless it's backed up thrice anyway.

For the purposes of this project, you need to have git installed onto your machine and an account with a git host.

>Installing git can become complicated and frustrating very quickly. If you encounter roadblocks, know that you're not alone. While I'd love to explain exactly how to install git, several key factors will change the exact instructions, including the operating system you use (MacOS, Windows, Ubuntu, etc), what dev 

**Examples of Git Hosts**: [Atlassian BitBucket](https://www.atlassian.com/git), [Microsoft GitHub](https://github.com/), [GitLab](https://about.gitlab.com/), [SourceForge](https://sourceforge.net/).

Note that for most personal purposes, these services offer free accounts. Be mindful of what constitutes as a paid account and for what needs.


## Installing The Things
Once you have your terminal emulator, code editor, git installed, and a git account, you're ready to install Eleventy! You've made it past a huge hurdle! Seriously, not being sarcastic. Environment set up is one of the biggest hurdles, and you just did most of it! 

The last step is installing Eleventy.

1. In your terminal emulator, type `ls` to figure out where you are. `ls` will print out all the items in the folder you are in.
2. Navigate to the folder you want (use `cd \[folder name\]` to go into a folder; use `cd ..` to back out of a folder).
3. Once you are in the folder you want to house your project, run `mk dir \[eleventy-project-name\]`.
4. Navigate into that folder using `cd \[eleventy-project-name\]`
5. Run `npm init -y`. This command creates what's called a `package.json` file. `Package.json` files are like a spreadsheet  of those library books you borrowed form npm. `Package.json` files can also keep track of other on-going tasks that your project needs. When clones your project, the `package.json` file tells npm all of the packages that are necessary to make that project run. The `-y` here is saying "yes" to all the questions that `npm` asks, and sets them to defaults.
6. Run 
`npm install --save-dev @11ty/eleventy`.
`install` goes to the npm registry and asks it to look for `@11ty/eleventy`. `--save-dev` tells `npm` to save this package (`@11ty/eleventy`) into what's called your devDependencies. This means someone downloading your project in the future, will have this dependency installed automatically.
7. Run `npx @11ty/eleventy`. `npx` is a helper tool for `npm`, that simplifies a lot of the dirty script-running that you had to do before.
8. Now, run 
`echo '<!doctype html><html lang="en"><head><title>[Your Name]'s Wicked Site!</title></head><body><p>I forking did it!!!</p></body></html>' > index.html`
9. You will now run Eleventy again. As we learned about in the last post, this step is where Eleventy takes all of the static files, and _generates_ the site. We'll talk more in the next installment of the structure of Eleventy and how this all comes together. For now, know that this is the part where the Generator part of Static Site Generator comes from.
10. Feel boss! You have gotten your environment up, and have a fresh new website to play with!

### Resources

[Wikipedia: Usage share of web browsers](https://en.wikipedia.org/wiki/Usage_share_of_web_browsers)