---
title: "Enter strawman: Build a tangible form to anchor esoteric discussions"
description: "Anchor esoteric discussions with a tangible form"
summary: "Use a strawman to build up an idea rather than to tear it down."
date: 2023-03-08 01:47:33
tags:
  - featured
  - tutorials
  - engineering
layout: layouts/post.njk
bgColor: white
navClass: bg-white
colorMode: dark
canonical: https://www.tatianamac.com/posts/enter-strawman
---

You ask, "Should I be making a new directory for this feature I'm building?" You expect a return value of: "yes" or "no." You had a 50% chance of guessing the "correct" answer...right?

Four hours, 49 messages, 13 participants (4 whom you've never met?) later, you have not a boolean but instead something rather _undefined_:

"What makes a feature a feature?"
"Isn't everything in React a component?"
"Where do I put functions that aren't hooks?"
"Why are some of the data objects in snake case and others in kebab case?"
"Why did we invent React when it's just PHP and a side of jQuery?"

Bigger, harder, sometimes just unrelated questions around how we define directories writ large have buried your question. At this point you might give up and leave this unanswered thread to disappear into the Slackwork. (I would blame neither you nor myself for the times I may or may not have have allegedly done this.)

If you've not experienced this situation yourself, it almost always starts off with a _harmless question._

Harmless questions are often an unintentional open invitation—a bat signal—for every opinion to ever have existed peripherally related to the question, implicit or explicit. People generally start off trying to answer the question directly and in earnest. Whatabouts, advocacy for the Devil, edge cases, differences in experiences, flock around the bright light. It's only a matter of time before you reach the level of existentialism that I (only sort of) exaggerated above.

When you find yourself in a vortex of bats[1] as I often do, enter strawman.

A strawman argument is when someone creates a false premise or variation upon the core argument in order to show how the core argument is false. If you make argument A, they will say argument B is false and kinda looks like A, therefore argument A is also false.

While incredibly annoying at the family dinner table and in Congressional session alike, building a strawman to serve as a unified mental model helps to ground discussions in reality.

In the case of the directory, your strawman could be an ASCII diagram of a folder structure with real examples from your code base. Whatever your question scope, your strawman needs to paint a picture of a milquetoast option. It doesn't need to be good or perfect. In fact, I'd strongly suggest doing it quickly and not allowing for too much analysis as you create it.

The strawman is built to stand in the field and divert the bats away from the light and toward something tangible, adjustable, and most importantly: held in the same form.

The difference between the strawman your cousin builds at Christmas dinner to prove a conspiracy theory and the one you'll build: Your strawman is there to build up an idea rather than to tear it down.

The question vortex happens because each participant responding to that question likely imagines something different in their head than the next person. Each person frames their questions and critiques through _their_ mental model, which may be very well-defined or amorphous depending on how they thinks (look up "can you visualise an apple").

In doing this exercise, I have found:

- Most written and verbal discussions like this are pontificating about a lot of nothing. Not in a shady/judgemental read, but that you are speaking of nothing real or tangible (yet). So you're often dispensing a lot of energy about...nothing.
- Visualising and revising technical details in your head is incredibly difficult. Most mental models we create don't actually hold state. Unless you have an eidactic memory, how you envision this modal probably shifts a bit with each piece of the conversation. Unscientific and shifty, it's akin to marking and hanging art with your arms, something I may or may not have allegedly done.
- What may be valid theoretical concerns often don't manifest into applicable issues—or at least don't need to be solved now if you can't produce any real examples of it. Pulling in real data will often show you this, as it did me when we used real features and components in a directory exercise.
- Conversations that begin with a question, no matter how innocuous, will invite other questions. We should encourage that, imho, as it means that people are leading with curiosity. The issue is staying in a question stasis.

The strawman helps us to align our mental models (as best as we can), forces us to reconcile the theoretical concern with the applicable issue, allows us to ask questions, but we're doing with a form of reference. Sometimes the strawman will be closer to its final form than you might think. Other times, the difficulty of crafting the strawman or the wretchedness of the form may help you to move on from the exercise. Regardless of the outcome, the next time you find yourself in a endless engineering musings vortex, ask your team... _What are we going to do? Do you want to build a strawman?_ ∎

[1] If you are here to question whether a strawman and a scarecrow are the same thing, did you notice I didn't ever use the word scarecrow and just subsumed it into strawmen like it was always one thing? Are you wondering how often this trickery happens? Why did they call it a strawman and not a scarecrow? Are you curious why I didn't degender strawman? Are you making up reasons? Why didn't you listen to Admiral Akbar? Because yeah, this is a trap, you sweet little batcrow.
