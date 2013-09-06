# YouTube Classic Navigation - Disable SPF/pushState

## Background

YouTube Classic Navigation is a greasemonkey script for YouTube users who don't want to use YouTube's fancy HTML 5 navigation callbacks.

These new navigation features break many userscripts when not opening pages in a new tab, because the page doesn't get reloaded properly.

## Operation

YouTube Classic Navigation executes on any YouTube **watch page** (i.e. youtube.com/watch?v=somevideoid). It will **block** the script file responsible for SPF, making it impossible for it to be used.

## Installation

YouTube Classic Navigation has been tested on **Firefox** version **23.0.1**, with **Greasemonkey** version **1.11**.

Navigate directly to the [raw script file](../../raw/release-latest/youtube-classic-navigation.user.js) with your browser to trigger an installation prompt.
