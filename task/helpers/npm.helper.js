'use strict';

var project = require('../project'),
    log     = console.log;

function publishNPM() {
    var execute     = require('child_process').execSync;

    try {
        process.chdir(project.path.master);
        log(execute('npm publish').toString());

    } catch(error) {
        log(error.stdout.toString());
    }
}

module.exports = {
    publishNPM: publishNPM
};
