'use strict';

var name    = 'deploy',

    project = require('../project'),

    log     = console.log;

/*
    0. clear
    1. generate documentation
    2. production build
    3. development build
    4. zipped build
    5. push gh-pages
    6. push master
    7. npm publish
 */
