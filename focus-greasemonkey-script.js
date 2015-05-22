// ==UserScript==
// @name        focus
// @namespace   JSK
// @description Block distractions and show beautiful stuff
// @include     about:addons
// @include     https://facebook.com/*
// @include     http://reddit.com/*
// @include     http://twitter.com/*
// @include     http://inbox.google.com/*
// @include     http://gmail.com/*
// @version     1
// @grant       none
// ==/UserScript==

var quote = '<h1>&ldquo;Without hard work, nothing grows but weeds.&rdquo;</h1> - Gordon B. Hinckley'
var body = document.getElementsByTagName('body')[0];
body.innerHTML = quote;
