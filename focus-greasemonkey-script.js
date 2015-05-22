// ==UserScript==
// @name        Focus
// @namespace   JSK
// @description Block distractions
// @include     https://www.facebook.com/*
// @include     http://www.twitter.com/*
// @include     http://www.reddit.com/*
// @include     http://www.imgur.com/*
// @include     http://inbox.google.com/*
// @version     1
// @grant       none
// ==/UserScript==

var quote = '<h1>&ldquo;Without hard work, nothing grows but weeds.&rdquo;</h1> - Gordon B. Hinck
var body = document.getElementsByTagName('body')[0];
body.innerHTML = quote;
