---
title: Beginner's Guide to Eleventy
description: "Part II: Installation and Structure"
summary: In the second installment of a four part guide, I show you how to install Eleventy—except I walk through each grueling step.
date: 2020-04-10 12:09:03
tags:
  - tutorials
  - Eleventy
  - featured
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

As much as possible, I'm going to treat this part of the tutorial like a cookbook, except I won't make you read seven paragraphs about that one summer I spent in Emilia Romagna rolling the perfect tortellini as I had a torrid tryst with Paolo (sorry, reading too many romance novels in the time of COVID).

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

A developer's tools can be personal. To some degree, if you choose well, a tool can really help speed up rote tasks, give you less headaches (by providing more colour customisation and modes), and create a more pleasant developer experience (DX).

Some developers have strange infatuations with tools and will insist some are better than others—10x developers might even make fun of you if you use the wrong tools. I think it's more personal than that. Picking out dev tools is like picking out a sports bra. Try out a bunch. See what sucks the least for you that you can get in and out of without breaking your arms. Learn how to customise them so you're less likely to have a uniboob. Abandon them in the back of a drawer if they don't work.

1. **Terminal Emulator**
   Terminal emulators (or Terminal or Term, if you're friends) are the bare bones text tools that make you look most like a hacker. If you've ever opened up Terminal on Windows or MacOS, you were in the Terminal Emulator. Terminal Emulators are essentially stripped-down programs without much of a visual interface that can give you access to your own computer and connect you to other computers.

     Inside of the Terminal emulator, you are using the **Command Line Interface (CLI)**. By comparison, most programs that we use day to day, like Microsoft PowerPoint, Adobe Illustrator, Sketch, Microsoft Paint, are all considered **Graphical User Interfaces (GUIs)**. In GUIs, you can see a visualisation of what you're doing. When working in a CLI, you are using text commands and relying on text output, which can be harder for many to visualise.

     Terminal emulators can do a lot, but for the purposes of this tutorial, you'll mostly be using it to download Eleventy and to manage packages.

    >Examples of package managers you may have come across include **npm** (npm, Inc) and **yarn** (Facebook) and **RubyGems**. Package managers usually provide a standardisation for little programs and snippets of code to improve DX, a command-line tool for installation/distrubiton, and some sort of registry to allow search.

     **Examples:** [Hyper](https://hyper.is/), [iTerm2](https://iterm2.com/), Terminal (default for MacOS and Windows).

     **Cues**: Many tutorials are not always explicit about when you're using the Terminal. Usually if you're cued to `run`, `build`, `npm`, `npx`, `homebrew`, `yarn` etc, and you see a short block of text like this, often preceded by a `$` (which you should not copy):

     `$ npm i make-me-a-sandwich-mario`

     You're going to paste that in your Terminal and hit return/enter to run it.

2. **Source-Code Editor**
   Source-Code Editors (or just Code Editor if you're friends) are where you edit code or *make the magic happen* as I like to say. The code editor is also where you can look like a hacker.

     Choosing a code editor can be really daunting, as everyone who has a four-letter name has a strong opinion about which is the best and is willing to go to great lengths to convince you.

     If you're starting out with code, my recommendation would be to pick the one that stresses you out the least. Look at the screenshots and read reviews. Consider what customisations are for your needs, say, like if [you're blind](https://www.reddit.com/r/Blind/comments/fjn9d9/code_editor/). See what seems appealing to spend hours crying in front of. For many years, I wrote in Coda (RIP), Sublime, Atom, then now I'm in Microsoft Visual Studio Code (VSCode). However, I think if I started in VSCode, I would have been overwhelmed with all the bells and whistles.

     **Examples**: GitHub's [Atom](https://www.sublimetext.com/), Adobe's [Brackets](http://brackets.io/), [Notepad++](https://notepad-plus-plus.org/), [Sublime](https://www.sublimetext.com/), [Vim](https://vim.org/) if you hate yourself and wear purist badges proud (jk! No tool shaming), Microsoft [Visual Studio Code (VSCode)](https://code.visualstudio.com/)

     **Cues**: If you see longer blocks of code, you're going to likely edit that in your code editor.

>You might hear someone refer to their **Integrated Development Environment (IDE)**. People sometimes use IDE interchangeably with code editor, when they are not, in fact, interchangeable. By definition, IDEs comprise a code editor, build automation tool, and debugger. Sometimes they have GUIs integrated into them as well.
>Most tools you hear about are only code editors, including Microsoft Visual Studio Code (VSCode or just Code if you're good friends), which, while robust, is not an IDE. Microsoft's IDE is Visual Studio. Naming, am I right?

For the purposes of what we're doing, I'd recommend that you get a **code editor** as it will suffice for this project.

3. **Browser**
   You probably already use a browser regularly. In fact, I would be willing to bet you're accessing this post from a browser. However, the browser that you use day to day to surf might be different than the one you use a developer.
   
   While we should all test our sites across multiple browsers, I think most of us will conduct the majority of our build within the browser we feel most comfortable with initially. To me, the choice of what browser to use comes down to the Developer Tools and Extensions I care most about.
   
   Personally, I use DuckDuckGo for most of my browsing (because security and privacy are very important to me for personal browsing), but I recognise that's a small user share. So, I develop primarily in Firefox and Chrome. (I prefer Firefox's DevTools and Chrome performance tooling [Lighthouse]. Play around with the Developer Tools of multiple browsers. See which one's interface makes the most sense to you.

   **Examples**: __Desktop__: Brave, Google Chrome, Microsoft Edge, Mozilla Firefox, Apple Safari, UCBrowser, etc. __Mobile__ Google Chrome, Opera, Opera Mini, Apple Safari, Samsung Internet, 

## Installing

### Resources

[Wikipedia: Usage share of web browsers](https://en.wikipedia.org/wiki/Usage_share_of_web_browsers)