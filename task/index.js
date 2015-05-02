'use strict';

var project     = require('../project'),

    // Paths
    root        = project.path.root,
    test        = project.path.test,

    // Tasks
    def         = require('./default.task'),
    build       = require('./build.task'),
    doc         = require('./documentation.task'),

    // Gulp
    gulp        = require('gulp'),
    debug       = require('gulp-debug'),
    prompt      = require('gulp-prompt'),

    gh          = require('./helpers/github.helper'),
    log         = console.log.bind(console);

    //filesize    = require'gulp-filesize');
    //jasmine   = require('gulp-jasmine');
    //mocha       = require('gulp-mocha');
    // log(root);

//gulp.task(def.name,     def.task);
gulp.task(build.name,   build.task);
gulp.task(doc.name,     doc.task);

    var ghtask = require('./gh.task');

gulp.task('default', function() {
    gulp
        .src('./*.exe')
        .pipe(debug())
        .pipe(prompt.prompt('What???'))

        //.pipe(ghtask.prompt());

    //gh.promptForCommitMessage();
});