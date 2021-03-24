---
title: "Let me learn: Provide tutorials in more formats"
description: More formats means more learners
summary: Unfortunately, so many of our tutorials (and media in general) only comes in one form. When our teachings are only provided in one media, in one language, in one *form*, it is inherently inaccessible to some subset of our students.
date: 2021-03-24 00:34:35
tags:
  - featured
  - tutorials
  - performance
  - accessibility
layout: layouts/post.njk
bgColor: white
colorMode: dark
---

Hyperaware of how annoying it is when you want a recipe and have to read a 20-paragraph story about someone's great gran (and feeling bad you don't care), I have provided a [skip link](#the-one-format-problem) if you don't care about my back story to this post.

## Context for this post

My partner and I were watching TV and he said, "Oh, the closed captions are off. Do you want me to turn them on?" It was the moment that I realised:

1. The dude who wrote the Love Languages book had a limited imagination (also if you ever read the book it is hugely misogynistic! I actually threw the book after I read it). My love language is being asked if you want closed captions on.
2. I could not tell you a single thing that happened for the last 30 minutes prior.
3. People often only think of closed captioning as a service for Deaf and Hard of Hearing folks. While we should centre them in our applications, I benefit from it as a sighted and hearing person.

Whenever I encounter a new course and it's video only without a transript OR closed captioning, I am overwhelmed with sadness. No matter how engaging, funny, well-produced the video is, I will not be able to retain it unless I cannot read along.

If I want to sing along to a song, I have to pull up the lyrics.
If I want to listen to an audio book, I have to coordinate make sure I have the book too, so I can visually read along.
If I want to listen to a podcast, I have to follow along the transcript.

If this sounds cumbersome, it is. I usually choose to go straight to reading at least 95% of the time and skip the other half.

I read fast and I retain what I read. This is my comfort zone and my learning style. But many other people are the opposite. It should be okay that we each learn differently and need different things to succeed.

## The one-format problem

Unfortunately, so many of our tutorials (and media in general) only comes in one form. When our teachings are only provided in one media, in one language, in one _form_, it is inherently inaccessible to some subset of our students.

I imagine most of us teach to provide opportunities and access. Creating access requires us yo provide more than one ways to take in our content. I've broken down each base medium with some of its benefits, tips, and opportunities to make your content more accessible.

## Long-form written content

### **Benefits**

- Supported by screen readers, Braille displays, and many other assistive technologies
- Can be translated into other languages somewhat fluidly and for free (though results might vary!)
- Starting with a solid HTML structure and using semantics will get you very far
- Very lightweight, creating better access for spotty/low internet connectivity/data

### Tips

- **Use anchor tags and linking**: One of the most annoying things to do is to have to scroll through a long tutorial to find a specific section. Creating anchor tags allows people to deep link into sections (which is also a great check for accessibility to make sure your header tags are logical and provide the hierarchy you want).
- **Add diagrams and visuals where possible:** Make sure that the diagrams tell a story that the words don't, or tell it in a different way that might help someone to learn. Visuals can guide and break up a story, especially for people who struggle to focus on written content. Make sure you write clear `alt` text or `longdesc` (for longer explanations).

### Opportunities

- **Record an audio file of you reading the written content.**
  I first saw this idea on Lindsey Kopacz' blog, [a11y with Lindsey](https://www.a11ywithlindsey.com/blog/). People can hear pronunciation and personality, learn the language auditorily, and perhaps enjoy it while doing something else (people who don't rely on screen readers don't often think to use them to have things read for them). Come up with a strategy for whether or not you'll read through code snippets and if so, how.

- **Visualise written content into a more dynamic way.**
  Many people, some neurodivergent folks especially, benefit from information being distilled into diagrams, comics, or less word-dense formats. Visuals can also benefit people who might not read/understand the language you wrote it in. They can also be an effective lead-in to your long-form from visually-driven avenues like Pinterest or Instagram.

- **Build in a way for people to translate your posts.**
  Many people have generously offered to translate my writing into languages cooler than English and I always want to take them up on it. I don't currently have a great mechanism on my site to share them. Don't be like me. Build in a language feature!

  (While people can rely on automated translations services, ther eis something much better about having a human interpret your post into another language. I also love the community building feels. Google Translate is mostly just rude to me.)

## Video content

### **Benefits**

- Gives both audio and visual context
- Emotion and tone can be better conveyed
- Fluidly switch between person talking and supporting visuals

### **Tips**

- **Consider clipping long tutorials down to shorter chapters** so that people can download/listen to what they need, break up their viewing sessions (particularly helpful for attention challenges).
- **Ensure you are serving videos in multiple formats and sizes,** prioritising next gen formats like webm for the browsers that can handle them, and mp4 for all else. Use device detection and queries to serve users with the most appropriate video format for them.
- **Turn autoplay off**: Autoplay causes unnecessary bandwidth/data/battery usage especially for data-only mobile users, can make people with vestibular disorders sick, **and** can interfere with people using screen readers. Videos with audio can be jarring if someone is in a quiet place.
- **Remove audio from muted video files**: If you are serving a video file that you don't intend to provide audio for, make sure you remove the audio from the file itself. Also, if you're serving a video file, consider providing a gif alternative as a fall back.

### **Opportunities**

- **Closed captioning** allows people to follow along and read your video (if they're not able to listen due to a disability or situational context).
  Ideally, closed captioning should be a togglable feature of your video player. However, in platforms where this is not yet possible (i.e., TikTok, Instagram, etc), please use a captioning app to add open captions. (I like [MixCaptions](https://apps.apple.com/us/app/mixcaptions-video-captions/id952426779) for iOS.)

  Open captions are burned onto the media and cannot be turned off. While they are not ideal, they are better than no captions.

- **Transcripts** allows people who prefer reading/not able to watch a video to read/skim all the content. Transcripts are also more translatable and searchable and lightweight. If someone can't load your massive video due to a slow connection, they can still benefit.

- **Videos, tutorials and talks, can be converted into engaging long-form written content** beyond just a transcript. Something Ethan Marcotte does that I really admire (well, perhaps second to his impressive meme database) is that he translates his talks into webpages (see [The World-Wide Work](https://ethanmarcotte.com/wrote/the-world-wide-work/).

Note that I didn't break out audio into its own separate category. Much of the principles above apply for audio (such as transcripts, preventing audio play, etc).

## Repos/Pens/Snippets

While repos, pens, and snippets can supplant both written and video content, they sometimes go out into the wild in their own. I provided some ways to help guide people within the snippets.

### Tips

- **Test embed accessibility.**
  If you're relying on a third-party embed (from a code sandbox type environment like JSFiddle, CodeSandbox, or CodePen), make sure you test the keyboard and screen reader accessibility of the embed once it gets into your site.
- **Ensure you're using a sufficiently colour-contrasted code theme** or allow people to change it.
  Many of the themes are very low contrast. Test your theme to make sure it passes [WCAG AA](https://www.w3.org/WAI/WCAG2AA-Conformance).
- **Provide code comments and name things as though this might be the only thing your student sees!**
  Even if your repo/pen might be part of a demo or longer-written content, it may get lost in the wild on its own. Provide as much guidance as you can line by line. Why did you make the decisions that you did? What are some "gotchas" you can help prevent people from getting caught up on?
- **Link back to your main thread in comments too**
  While you should prepare for the worst, make sure that you link back to any longer form content that exists so that if someone finds this first, they can loop back to your video or written content.

Through these tips, I hope I've expanded the way you think about your content. You might be thinking, "gosh, this is a lot of work." It is!

How I think about it is: We don't have to do it all at once. Release your tutorial in the first format you feel most comfortable in. Then, build in time to extend it into a second, or third format. Perhaps you can pair/trade with a friend who enjoys a format you hate! The goal should not be to stop, but instead to keep imagining new and inventive ways to make our content as acccessible to as many people as possible, especially those who are usually given the biggest barriers to entry.
