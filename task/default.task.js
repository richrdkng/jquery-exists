'use strict';

    // Task name
var name    = 'default',

    // Project & paths
    project = require('../project'),
    test    = project.path.test,

    // Gulp
    gulp    = require('gulp'),
    debug   = require('gulp-debug');

module.exports = {
    name: name,
    task: function() {
        return gulp
            .src(test + '/**/*.js')
            .pipe(debug());
    }
};