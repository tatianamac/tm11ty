---
title: "prefers-reduced-motion: Taking a no-motion-first approach to animations"
description: Animations should be an enhancement, not critical to a user's understanding
summary: Use the prefers-reduced-motion media query to help guide your animation principles
date: 2021-03-18 12:56:13
tags:
  - featured
  - tutorials
  - animation
  - accessibility
layout: layouts/post.njk
bgColor: white
navClass: bg-white
colorMode: dark
---

> I recognise that my `pre` code needs a lot of work, so the code samples are difficult to read and ugly right now. I plan to update that code. Apologies in the meantime; hopefully the message is still understandable!

Animations help to breathe life into interactive experiences. Animations, especially when overused and abused, can make people very ill. Through this article, I hope to provide you an approach and guidance to discussing how you/your company use animation thoughtfully and responsibly.

## Animations can make people sick

I experience benign paroxysmal positional vertigo (BPPV), which is a fancy way of saying, the room can start spinning if I turn my head the wrong way. Another side effect is if a website [scrolljacks](https://www.sitepoint.com/scrolljacking-accessibility/) or has too much animation, I can become dizzy and have to lay down often for the rest of the day. BPPV is one of many [vestibular disorders](https://vestibular.org/article/what-is-vestibular/about-vestibular-disorders/) that impact millions of people.

As you can imagine, this can be a problem when you're a frontend engineer and are animating lots of things.

## User settings rule all

A core accessibility approach of mine is to let the user determine what's best for them and to enable as many user settings as I can. Most operating systems allow us to reduce the motion and have for a very long time.

![Mac OS Accessibility Settings with Reduce motion set](../../assets/img/os-accessibility-reduce.png)

<!-- (../../assets/img/os-accessibility-reduce.png) -->

The setting has been exposed now to most modern browsers using a media feature called `prefers-reduced-motion`. `prefers-reduced-motion` media query acts as any other media query with two posible options:

1. `no-preference` (the default): the user has not indicated to "Reduce motion" in their OS and will be served all animations and animations designated explicitly as `prefers-reduced-motion: no-preference`. [I want to make a critical note here that this is operating on a no-consent model. Ew. The user hasn't necessarily *opted into* animations. They just haven't checked "Reduce motion." That could be because they like and can tolerate animations, or, it's equally possible the user *doesn't know about this setting.* So, I want us to make sure we're not assuming that these users necessarily *want* animations.]
2. `reduce`: the user has "Reduce motion" checked in their operating system's Accessibility settings and will be served whatever is in the media query for `prefers-reduced-motion: reduce`.

What this means is that if we can use `prefers-reduced-motion` to customise our animations based on user settings.

We will have two parts to our code:

1. animation, and
2. `prefers-reduced-motion` media query.

In CSS, it could look something like this:

```css
/*
Part 1: Animation
Here is where we would put our full animation.
*/

.wordArtRotation {
  animation: rotation 2s infinite linear;
}

/*
Part 2: Media query
Here is where we would put our partial or no animation.
*/
@media (prefers-reduced-motion: reduce) {
  .wordArtRotation {
    animation: none;
  }
}
```

## Start with No Motion

When I collaborate with a designer/animator on an animation, I first ask, "Is this animation **critical** to understanding the content?"

### When the answer is "No"

More often than not, the answer is "no." (It might take some finessing of the conversation, so remember to emphasise that being **critical** isn't the same thing as being **important** or **nice** or **aesthetic**.) When conceived well, animations should be an _enhancement_ to an explanation.

If the animation isn't critical, then my default code is to include `animation: none` for all of my animations. In CSS, it could look something like this:

```css
@media (prefers-reduced-motion: reduce) {
  .wordArtRotation,
  .rainbowWave,
  .textFadeIn {
    animation: none;
  }
}
```

Another way it could look is to reverse our thought process. Instead of defaulting to _adding_ animations universally, we can instead _only add_ them for people who have designated `no-preference`.

The code could look something like this:

```css
/*
Part 1: Animation
Here is where we would put our full animation.
*/

.wordArtRotation {
  animation: none;
}

/*
Part 2: Media query
Here is where we would put our partial or no animation.
*/
@media (prefers-reduced-motion: no-preference) {
  .wordArtRotation {
    animation: rotation 2s infinite linear;
  }
}
```

The difference between the first code block and the second one comes down to browser support. The support for `prefers-reduced-motion` is fairly strong, but still has some gaps (see [Can I Use: Prefers reduced motion](https://caniuse.com/?search=prefers-reduced-motion)). Defaulting to this latter approach will mean that all users will default to no animation, including users whose browsers won't recognise the media query.

The difference is not just in code, but in mindset shift. I won't tell you which one is right for you/your org, but I think this type of differentiation is important for your design system, for example. I find that sharing the technical approach with the designer gets them thinking about how they intend for their animations to exist in different environments (and getting them to cater their animations to user preferences).

To turn these individual conversations into a systemic one, you could include animation principles with guidance around how your design system would like animations to be not only coded, but conceived. Providing this context in your documentation will help to guide better animator/designer-developer collaboration.

Framer Motion sets a good tone for accessibilty in documentation with their [Guide to Accessibility](https://www.framer.com/api/motion/guide-accessibility/).

### Animation-specific stylesheet

Since we've all agreed that our animations aren't critical to perceiving our page (winky face), we can take that one step further and _only_ serve our users CSS if they are cool with `prefers-reduced-motion: no-preference`.

Here's what you might include in your HTML file in the <head> tag:

```html
<link
  rel="stylesheet"
  href="animations.css"
  media="(prefers-reduced-motion: no-preference)"
/>
```

[Code snippet from Web.dev: prefers-reduced-motion](https://web.dev/prefers-reduced-motion/)

What this requires is we've placed all our animations into one CSS file. If our user has indicated "Reduce motion" (and thus, the media query `prefers-reduced-motion: reduce` is true), then the user isn't even served our stylesheet at all. Separating our CSS animations into its own stylesheet can be a very daunting task on a large codebase, so this could require some heavy refactoring. But if CSS animations is a large part of your codebase, it might also mean huge performance savings!

I love this option because it is putting accessibility and performance on the same team—as they should be!

## When the answer is "Yes"

If the animation is critical to understanding, then I ask what other ways we intend to serve up that information, because without alternates, we're excluding anyone who won't be able to see the animation (whether due to physical disability, data/technical restrictions, situational, etc).

### Questions I typically ask in response

Sometimes this conversation between the person who conceived the animation and the person implementing it doesn't happen. That is a damn shame, because I find that's where we needlessly animate things that add exactly zero value to the conversation.

I also ranked these questions in level of spiciness for ~~no other reason than my entertainment~~ to cater your communication to the context of your conversation.

- Why is this animation critical? :hot_pepper:

- What other ways can we serve up the critical animation? (e.g., through written text, through a static diagram, etc) :hot_pepper::hot_pepper:I
- If the animation can't load for someone or they can't see it, what was your plan? :hot_pepper::hot_pepper::hot_pepper:

Most of the time, I'm negotiating a way to get information to be served in _more_ ways. Changing the answer from "yes, this animation is critical to understanding" to "no, this animation is not critical but an enhancement." Remember, accessibility means giving the users as many, diversified options as possible, not determining which option works best for them.

## Beyond CSS animations

### Auto-playing video

Auto-playing anything is cruel to both users who experience vestibular disorders _and_ neurodivergent users for whom autoplay can cause major focus issues.

CSS-tricks covers this well with [Reduced motion picture technique: take two](https://css-tricks.com/reduced-motion-picture-technique-take-two/).

### JavaScript animations

Now while I am very pro-CSS animations (and think they can handle most standard animations), I recognise that CSS can't handle **all** types of animations, for example, `react-spring` animations. I'm not yet an expert in these areas. Instead of taking weeks to learn this all to regurgigate it back to you right now, I wanted to share some existing articles that already do a great job of distilling down this information.

**Vanilla JS:** [`window.matchMedia` demo from web.dev](https://web.dev/prefers-reduced-motion/#demo)

React: [useReduceMotion Hook by infiniteluke](https://github.com/infiniteluke/react-reduce-motion)

## Further Reading

Commentary on `prefers-reduced-motion` with authors covered that I did not. (Note there will be some introductory overlap)

[A List Apart: Accessibility for vestibular disorders](https://alistapart.com/article/accessibility-for-vestibular/)
Provides guidance to designing for vestibular disorders with tactical tips

[A11y with Lindsey: Reducing motion to improve accessibility](https://www.a11ywithlindsey.com/blog/reducing-motion-improve-accessibility)
Code snippets with brief rundown on adding a toggle to your page and using `localStorage` to preserve user setting

[Josh Comeau: Accessible Animations in React](https://www.joshwcomeau.com/react/prefers-reduced-motion/)
React Code snippets

#### Questions and Corrections

For questions, please [reach out on Twitter](https://www.twitter.com/TatianaTMac)! I can't promise to answer all your questions, but I'll try my best!

For corrections (typos, factual inaccuracies), please file a [GitHub issue](https://github.com/tatianamac/tm11ty/issues).
