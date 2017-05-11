# ember-links-with-follower

[![Greenkeeper badge](https://badges.greenkeeper.io/echobind/ember-links-with-follower.svg)](https://greenkeeper.io/)

[![CircleCI](https://circleci.com/gh/echobind/ember-links-with-follower.svg?style=svg)](https://circleci.com/gh/echobind/ember-links-with-follower)
[![npm version](https://badge.fury.io/js/ember-links-with-follower.svg)](http://badge.fury.io/js/ember-links-with-follower)
[![Code Climate](https://codeclimate.com/github/echobind/ember-links-with-follower/badges/gpa.svg)](https://codeclimate.com/github/echobind/ember-links-with-follower)
[![Dependency Status](https://david-dm.org/echobind/ember-links-with-follower.svg)](https://david-dm.org/echobind/ember-links-with-follower)
[![Ember Observer Score](http://emberobserver.com/badges/ember-links-with-follower.svg)](http://emberobserver.com/addons/ember-links-with-follower)

## Features
Provides a component that renders a set of links with a follower line underneath. The follower will animate to the position of the active link, and grow or shrink in size if needed. If no active links are found, the follower will hide.

This pattern is commonly used for navigation:

![twitter](https://raw.githubusercontent.com/echobind/ember-links-with-follower/master/public/assets/images/twitter.png)

(from Twitter app)

![linkedin](https://raw.githubusercontent.com/echobind/ember-links-with-follower/master/public/assets/images/linkedin.png)

(from LinkedIn app)

Animation of the follower is done through CSS [transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) and [transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) using [translate3d](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function#translate3d()). The transitions duration will be set to 0 on window resize to avoid issues with animating while resizing.

Since Links with Follower hooks in to the Router's `willTransition` event, you can use `link-to` or `transitionTo` and the follower will still update properly.

## Installation

```
ember install ember-links-with-follower
```

## Usage
Render links with default behavior (links passed in the block are expected to be li's):

```hbs
{{#links-with-follower class="my-nav"}}
  {{#link-to 'Home' tagName='li'}}Home{{/link-to}}
  {{#link-to 'Stuff' tagName='li'}}Stuff{{/link-to}}
{{/links-with-follower}}
```

Render custom tags, change the active selector, and animate slowly:

```hbs
{{#links-with-follower
  containerTagName="section"
  linkTagName="div"
  activeSelector="selected"
  followerAnimationDuration=1000}}

  {{#link-to "Home" tagName="div"}}Home{{/link-to}}
  {{#link-to "Stuff" tagName="div"}}Stuff{{/link-to}}

{{/links-with-follower}}
```

Customize the follower with css:

```css
.my-nav .link-follower {
  border-color: tomato;
  border-size: 3px;
}
```

## How does this work?
A listener is added to the `router`'s `willTransition` event. On `willTransition`, we look for an active link in the links provided to the component via block format.

An active link is defined by the `activeSelector` property, which defaults to `'li.active:not(li.ember-transitioning-out), li.ember-transitioning-in'`. This allows us to eagerly transition the follower before the route has fully transitioned.


## Helpful Links

- ### [Demo](https://echobind.github.io/ember-links-with-follower)

- ### [Changelog](CHANGELOG.md)

- ### [Docs](https://echobind.github.io/ember-links-with-follower/docs/classes/LinksWithFollower.html)

## Legal
[Echobind](https://echobind.com) LLC (c) 2016
[@echobind](https://twitter.com/echobind)
[Licensed under the MIT license](http://www.opensource.org/licenses/mit-license.php)
