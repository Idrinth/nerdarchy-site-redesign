// ==UserScript==
// @name         Nerarchy site redesign
// @namespace    http://idrinth.de/
// @version      1.0.1
// @description  Tries to make the site a bit easier to handle by reducing the overload of the right side bar.
// @author       Björn "Idrinth" Büttner
// @match        https://nerdarchy.com/*
// @grant        none
// ==/UserScript==

(function(list) {
    'use strict';
    var styles=document.createElement('style');
    styles.setAttribute('type','text/css');
    for(var pos in list) {
       styles.appendChild(document.createTextNode(
           list[pos].elements.join(',')+"{"+list[pos].rules.join(';')+"}"
       ));
    }
    document.getElementsByTagName('head')[0].appendChild(styles);
    document.getElementsByTagName('body')[0].appendChild(document.getElementById('categories-3'));
    document.getElementsByClassName('title-area')[0].parentNode.insertBefore(document.getElementById('social_stickers_widget-3'),document.getElementsByClassName('title-area')[0].parentNode.firstChild);
    document.getElementsByClassName('title-area')[0].parentNode.appendChild(document.getElementById('search-4'));
})(
[
    {
        elements: ['body'],
        rules: ['font-size:13px','line-height: 1.5;']
    },
    {
        elements: ['h1','.entry-title'],
        rules: ['font-size:2em']
    },
    {
        elements: ['h2'],
        rules: ['font-size:1.75em']
    },
    {
        elements: ['h3'],
        rules: ['font-size:1.55em']
    },
    {
        elements: ['h4'],
        rules: ['font-size:1.4em']
    },
    {
        elements: ['h5'],
        rules: ['font-size:1.3em']
    },
    {
        elements: ['.site-container'],
        rules: ['padding:12px']
    },
    {
        elements: ['.nav-primary'],
        rules: ['margin:0 -12px']
    },
    {
        elements: ['#social_stickers_widget-3'],
        rules: ['margin:0','overflow:hidden','float:right']
    },
    {
        elements: ['#categories-3'],
        rules: ['margin-bottom:0','direction: rtl','padding-right:2px','transition: margin-left 2s','overflow-y: scroll','overflow-x:hidden','position: fixed','left: 0','top: 0','background: #fff','height: 100%','margin-left: -275px','width: 300px','box-sizing: border-box','transition-delay:2.5s']
    },
    {
        elements: ['#categories-3:hover'],
        rules: ['margin-left:0','transition-delay:0s']
    },
    {
        elements: ['#categories-3 > *'],
        rules: ['direction: ltr']
    },
    {
        elements: ['#categories-3 li'],
        rules: ['margin-bottom:0','margin-left:1.5em','margin-right:1.5em','padding:2px','list-style:none']
    },
    {
        elements: ['#categories-3 li a'],
        rules: ['background:#f96e5b','color:#fff','border-radius:3px','display:block','text-align:center','text-decoration:none']
    },
    {
        elements: ['#categories-3 .widget-title'],
        rules: ['margin:0','padding: 0.5em']
    },
    {
        elements: ['.footer-widgets'],
        rules: ['display:none']
    },
    {
        elements: ['#search-4'],
        rules: ['margin: 0','float: left','overflow: hidden']
    },
    {
        elements: ['#search-4 form'],
        rules: ['width:100%','margin:0']
    }
]
);
