---
title: "Why'd you park like such an a-hole?: Inviting curiosity, context into engineering, our lives"
description: Curiosity over critique—in parking and engineering
summary: Being more curious and less critical in engineering
date: 2021-09-03 17:50:33
tags:
  - featured
  - culture
  - engineering
layout: layouts/post.njk
bgColor: white
navClass: bg-white
colorMode: dark
canonical: https://www.tatianamac.com/posts/context-in-engineering
---

If you drive and have had to parallel park, you might have encountered a situation where you _could have_ parked somewhere if that Prius just had _pulled up a bit_ or split the difference _better_.

If you're even-tempered, you drove around the block and found another spot. If you're easy to temper, you might have cursed under your breath—or maybe, just maybe—you were having a real one and even left a _note_.

Cursed as a deeply analytical person, whenever I encounter a bad park job, my first question is, "why _would_ they have parked that way?" I try to ask it without as much snark as possible (I have my days, still).

It's very easy for us to assume that that person actively chose to park like an a-hole and decided to ruin a few other people's day for shits and giggles.

Most of the time we'll never know. Equally likely to assume stranger sociopathy, we can write a more likely story, too: They didn't _choose_ to park that way. Relatably: Intent does not erase impact, even in parking. So yeah, they probably didn't actively seek to ruin your life in this minor way, but instead, did it unaware, thinking about the global pandemic, in a rush, or even equally likely, they _inherited_ that spot.

Parallel parking is one of the most brilliant examples of feedback loops. We have some general guidelines (at least here in the U.S., let me tell you about my time in Cairo and how parking works there), but for the most part, you park _around_ other people and other things (fire hydrants, trash cans, driveways, unofficial cones that busybodies leave that mean nothing but I still weirdly abide by). So, in a perfect universe where all our cars are the same lengths and driveways are spaced out equidistantly, we could make more assumptions.

But given the chaos that is humankind, parallel parking is a complete mess. It's highly likely that the conditions you see before you are not the ones the a-hole parker had.

Yet when we're rushing to get our own spot, we're so quick to project pristine conditions for others—hypocritically while we're experiencing the very chaotic impact of parallel parking ourselves!

Inheriting a chaotic system and expecting pristine conditions prior sounds deeply familiar to how many of us navigate inheriting code bases. It is easy to come into a codebase with all of our own context and assumptions as to how it should be in a pristine environment.

Just the other day, I caught myself asking, "why the fork balls would you have done it that convoluted way?" Several hours later, I had refactored an entire flow. And then a day later, when a few things broke, I understood why the previous engineer had done it the convoluted way they did.

Said another way, they parked their car behind a big truck and when I got there, all I saw was a big gap.

I wrongly made an assumption about the _conditions_ and _context_ under which the previous engineer made that decision. It wasn't until I went to park in the same spot that I realised the reasoning.

I stopped to reflect on how I can train myself out of this habit:

1. **Assume no intent and observe all impact.** We're often told to assume positive intent because we want to believe in the "good in all people." I have a lot of thoughts on this binary thinking (saved for another day, though you can watch my talk if you're curious). But here, I think we'd be better off to not assume anything. Speculation is fine, as long as we recognise the only way to know for sure is to ask the previous engineer (and that's not always possible).

2. **Leave things better than you found them—when possible.** In the parking situation, you can do your best to not worsen the situation for people downstream. Try to neutralise the ill-effects of the unideal park job. The code equivalent is to document. I made sure to document against why I made the decision I did above (redoing, in part, the previous engineer's work. Leaving notes for the future engineer lets them know why I parked like an a-hole, so to speak.

   Even more proactively, if you find yourself writing code that is unexpected (which yes, requires a great deal of self-awareness and experience), document it. I am of the school of thought it's better to overdocument than underdocument.

   The worst thing that happens with overdocumentation is the (usually arrogant) engineer reads the comments and thinks it's unnecessary (insert cries of "self-documenting code"). The worst thing with underdocumentation is you take down an entire system—I know what I'm picking, but you do you, foo.

3. **Approach with curiosity over critique.** It was a really humbling moment for me to realise that I had assumed the previous engineer _chose to code like an a-hole_, because I generally try to approach with _curiousity over critique._ But we all have better and worse days. I catch myself regularly telling myself, _curiosity, not critique._

   When I'm confused by a code decision, I force myself to answer, _why **would** they do it that way?_ I make a little list. The list is different each time, but one item that is ever present is: _There is a lot of ways to do this, and this might have been the best way they knew how._

   Like in the parking situation, we rarely have enough information or context to critique effectively. We make a lot of assumptions in critique, but in curiosity, we can _ask_, we can _speculate_ but ultimately never assume anything. Curiosity is expansive, critique is reductive.
   Also, if you feel in a position to critique, it's a gamble. You're allowing yourself to show your ass if you're wrong. Curiosity always allows room for evolving information, missing context, and knowledge you didn't have. After two years in a pandemic, I would hope we'd all see how quickly things can evolve and change on a global scale.

I hope the next time you encounter a shitty park job or a strange function or even a weird situation in your life that makes no sense, you can count to ten, speculate a few reasons why they might have done it that way, and invite curiosity and context into your life.

## Questions and Corrections

For questions, please [reach out on Twitter](https://www.twitter.com/TatianaTMac)! I can't promise to answer all your questions, but I'll try my best!

For corrections (typos, factual inaccuracies), please file a [GitHub issue](https://github.com/tatianamac/tm11ty/issues).
