'use strict';

    // Task name
var name    = 'publish',

    // Project & paths
    project = require('../project'),
    root    = project.path.root,

    // Gulp & related
    gulp    = require('gulp'),
    github  = require('./helpers/github.helper'),
    npm     = require('./helpers/npm.helper'),
    debug   = require('gulp-debug'),

    log = console.log;

module.exports = {
    name: name,
    task: function() {
        return gulp
            .src('')
            .pipe(debug());
    }
};