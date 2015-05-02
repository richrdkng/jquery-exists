'use strict';

    // Task name
var name    = 'build',

    // Project & paths
    project = require('../project'),
    root    = project.path.root,

    // Gulp & related
    gulp    = require('gulp'),
    clean   = require('gulp-clean'),
    version = require('./helpers/version.helper'),
    debug   = require('gulp-debug'),

    log = console.log;

//log(version.incrementMajor('1.0.0'));
//log(typeof version.incrementMajor('1.0.0'));

log(process.argv);

module.exports = {
    name: name,
    task: function() {
        return gulp
            .src('')
            .pipe(debug());
    }
};