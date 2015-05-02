'use strict';

var //project = require('../project'),
    input   = require('readline-sync'),
    log     = console.log;

const   COMMIT_MESSAGE  = 1,
        TAG_MESSAGE     = 2;

input.setDefaultOptions({keepWhitespace: true});

function isProperCommitMessageArray(messageArray) {
    var index;

    if(Array.isArray(messageArray) && messageArray.length > 0) {
        index = messageArray.length;

        while(--index >= 0) {
            if(typeof messageArray[index] === 'string' && messageArray[index].length > 0) {
                return true;
            }
        }
    }

    return false;
}
function messageArrayToMessageString(messageArray) {
    return messageArray.join('\n');
}
function messageArrayToGitMessageChain(messageArray) {
    var chain = '-m "',
        i = 0,
        len = messageArray.length;

    for(; i < len; ++i) {
        chain += messageArray[i]+'\n';
    }

    chain += '"';

    return chain;
}
function promptCommitMessage(messageType) {
    var messageArray = [],
        type,
        line;

    switch(messageType) {
        case COMMIT_MESSAGE:
            type = 'Commit Message';
            break;
        case TAG_MESSAGE:
            type = 'Tag Message';
            break;
        default:
            throw new Error('messageType: '+messageType+' is not supported.');
    }

    log(type+': (. than {ENTER}, when done) \n');

    while(true) {
        line = input.prompt();

        if(line === '.') {
            break;
        }

        messageArray.push(line);
    }

    log('Entered Message: \n');
    if(messageArray.length === 0) {
        log('(Warning, you didn\'t write any message!)');
    }

    log('------------------------------------------------------------------------');
    log(messageArrayToMessageString(messageArray));
    log('------------------------------------------------------------------------');

    log('[1] - Accept');
    log('[2] - Reenter');

    while(true) {
        line = input.prompt();

        if(line === '1') {
            break;
        } else if(line === '2') {
            return promptCommitMessage();
        }
    }

    return messageArray;
}

function pushMaster(commitMessageArray, tagVersion, tagMessage) {
    var project = {
            path: {
                master: 'c:\\Users\\Richard\\OneDrive\\Documents\\Projects\\jquery-exists\\master'
            },
            repository: {
                git: 'https://github.com/richrdkng/jquery-exists.git',
                credentials: {
                    username: 'richrdkng@gmail.com',
                    password: 'sf34tgh6d6the5UUKUUAO'
                }
            }
        },
        execute     = require('child_process').execSync,
        repository  = project.repository.git.substr(8),
        tag = true,
        credentials = project.repository.credentials,
        username,
        password;

    if(!credentials) {
        log('credentials not found');
        return;
    }

    if(!isProperCommitMessageArray(commitMessageArray)) {
        log('Commit message must be a non-empty message');
        return;
    }

    if(typeof tagVersion !== 'string' || typeof tagMessage !== 'string') {
        tag = false;
    }

    username = credentials.username;
    password = credentials.password;

    try {
        process.chdir(project.path.master);
        log(execute('git add --all').toString());
        log(execute('git commit '+messageArrayToGitMessageChain(commitMessageArray)).toString());

        if(tag) {
            log(execute(
                'git tag -a '
                + tagVersion
                + ' -m "'
                + tagMessage+'"'
            ).toString());
        }

        log(execute(
                'git remote set-url origin https://'
                + encodeURIComponent(username)
                + ':'
                + encodeURIComponent(password)
                + '@'
                + repository
            ).toString());
        log(execute('git push -u --tags origin master').toString());

    } catch(error) {
        log(error.stdout.toString());
    }
}
function pushGHPages(commitMessageArray) {
    var execute     = require('child_process').execSync,
        repository  = project.repository.git.substr(8),
        credentials = project.repository.credentials,
        username,
        password;

    if(!credentials) {
        log('credentials not found');
        return;
    }

    if(typeof commitMessageArray !== 'string') {
        log('message must be a valid string');
        return;
    }

    username = credentials.username;
    password = credentials.password;

    try {
        process.chdir(project.path.ghpages);
        log(execute('git add --all').toString());
        log(execute('git commit -m "'+commitMessageArray+'"').toString());
        log(execute(
                'git remote set-url origin https://'
                + encodeURIComponent(username)
                + ':'
                + encodeURIComponent(password)
                + '@'
                + repository
            ).toString());
        log(execute('git push -u origin gh-pages').toString());
        process.chdir(project.path.master);

    } catch(error) {
        log(error.stdout.toString());
    }
}

var commitMessage = promptCommitMessage(COMMIT_MESSAGE);

pushMaster(commitMessage);

module.exports = {
    COMMIT_MESSAGE:         COMMIT_MESSAGE,
    TAG_MESSAGE:            TAG_MESSAGE,

    promptCommitMessage:    promptCommitMessage,
    pushMaster:             pushMaster,
    pushGHPages:            pushGHPages
};
