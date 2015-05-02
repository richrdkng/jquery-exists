'use strict';

    // Task name
var name    = 'documentation',

    // Project & paths
    project = require('../project'),
    root    = project.path.root,
    ghpages = project.path.ghpages,

    // Gulp & related
    gulp    = require('gulp'),
    clean   = require('gulp-clean'),
    debug   = require('gulp-debug'),

    log = console.log;

module.exports = {
    name: name,
    task: function() {
        return gulp
            // clear gh-pages
            .src([
                '!'+ghpages+'/.git',
                '!'+ghpages+'/asset',
                '!'+ghpages+'/asset/*',
                '!'+ghpages+'/asset/**/*.*',
                    ghpages+'/**/*.*',      // * files first (https://github.com/peter-vilja/gulp-clean/issues/17)
                    ghpages+'/**/*'         // * folders
            ], {read: false})               // for faster cleaning
            .pipe(clean({force: true}));    // for cleaning outside of cwd

            // generate documentation
            //.src()
            //.pipe()
    }
};