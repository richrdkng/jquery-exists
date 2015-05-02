'use strict';

var semver = require('semver');

module.exports = {
    incrementMajor: function(version) {
        return semver.inc(version, 'major');
    },
    incrementMinor: function(version) {
        return semver.inc(version, 'minor');
    },
    incrementPatch: function(version) {
        return semver.inc(version, 'patch');
    }
};