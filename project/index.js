'use strict';

    // Project details
var name = 'jquery-exists',
    description = 'An AMD (Require.js) and browser compatible jQuery plugin to check more easily and better whether an element (or many) exists.',
    version = '1.0.0',
    homepage = '',
    repository = {
        credentials: null,
        git: 'https://github.com/richrdkng/jquery-exists.git'
    },
    issues = '',

    authors = [
        [ 'Richard King', 'richrdkng@gmail.com', 'https://github.com/richrdkng' ]
    ],
    license = [
        'MIT'
    ],
    keywords = [
        'jquery',
        'exists',
        'plugin',
        'jquery-plugin',
        'jquery-exists',
        'jquery.exists',
        'javascript',
        'js',
        'amd',
        'requirejs',
        'production',
        'tool'
    ],
    dependencies = {
        dependencies: {},
        peerDependencies: {},
        devDependencies: {}
    },

    // Paths
    path = require('path'),
    root = path.dirname(__dirname),
    p = {
        root:       root,
        master:     root,
        ghpages:    path.normalize(root + '/../gh-pages'),
        project:    path.normalize(root + '/project'),
        source:     path.normalize(root + '/src'),
        test:       path.normalize(root + '/test')
    },

    log = console.log;

    // include credentials, if present
    try {
        repository.credentials = require('./credentials');
    } catch(error) {
        repository.credentials = false;
    }

module.exports = {
    name:           name,
    description:    description,
    version:        version,
    path:           p,
    repository:     repository
};