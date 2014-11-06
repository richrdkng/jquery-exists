jQuery-exists [![Build Status](https://travis-ci.org/richard-kng/jquery-exists.svg?branch=master)](https://travis-ci.org/richard-kng/jquery-exists)
=============
__An AMD (Require.js) and browser compatible jQuery plugin to check more easily and better whether an element (or many) exists.__

To support this project, you can at [the support page](http://richard-kng.github.io/support/) by supporting the developer.

Getting Started
---------------

__NPM__ ([What is NPM?](https://docs.nodejitsu.com/articles/getting-started/npm/what-is-npm) [What is Grunt?](http://gruntjs.com/))

    npm install jquery-exists --save-dev

__Bower__ ([What is Bower?](http://bower.io/))

    bower install jquery-exists --save-dev

__Download directly__ __(Do not link this directly on your site, the file is sent with a plain/text header and can cause loading problems)__

- [jquery.exists.js](https://raw.githubusercontent.com/richard-kng/qulog/master/lib/jquery.exists.js)

API & Usage
-----------

__In Browser (NPM)__
```html
    <script src="node_modules/jquery-exists/jquery.exists.js"></script>
```
__In Browser (Bower)__
```html
    <script src="bower_components/jquery-exists/jquery.exists.js"></script>
```
__In Browser (Require.js)__
```html
    <script>
        require(["jquery", "jquery-exists"], function($) {
                /* ready, steady, GO! */
        });
    </script>
```
__In Browser (Directly downloaded source)__
```html
    <!-- add line below after you have added jQuery -->
    <script src="scripts/jquery.exists.js"></script>
```
In the code:
------------


Internet Explorer 8 and Below
-----------------------------
This plugins is __compatible with IE8__ and was tested with IE8 & __jQuery 1.9.0__.

Suggestions, Ideas & Requests
-----------------------------
Post any occurring suggestions, useful ideas and requests to the project's issue page under the __suggestion/idea/request__ label by clicking [here](https://github.com/richard-kng/jquery-exists/labels/suggestion/idea/request).

 - Constructive criticism is encouraged and welcomed by contacting the developer or using GitHub.

Issues/Bugs
-----------
In case of any occurring issues and/or bugs, post on the project's [issues](https://github.com/richard-kng/jquery-exists/issues) page with appropriate label(s).

Support
-------
If you find this tool useful, you can support this project by supporting the developer [here](http://richard-kng.github.io/support/).

Contribution & A Note
---------------------
In the spirit of open source software development, this project is always open to and encourages community code contribution. To get started, just run through the source file, check the comments and general coding style and start to contribute.

- In case you find this tool useful, [support it](http://richard-kng.github.io/support/) by supporting the developer, follow the developer on [social platforms](http://richard-kng.github.io/support/#social) or send an email to the developer.

License
-------
Copyright (c) 2014 "Richard KnG" Richárd Szakács. __Licensed under the MIT license__.

The license mentioned above applies to all parts of this software except as
documented below

All files located in the node_modules and external directories are
externally maintained libraries used by this software which have their
own licenses. We recommend you read them, as their terms may differ from
the terms above.