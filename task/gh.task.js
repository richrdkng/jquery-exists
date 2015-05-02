var es  = require('event-stream'),
    log = console.log;

module.exports = {

    prompt: function() {
        var prompted = false;

        return es.map(function(file, callback) {
            if(prompted) {
                callback(null, file);
                return;
            }

            //log('prompted:', prompted);

            //prompted = true;

            var readline    = require('readline'),
                input       = readline.createInterface(process.stdin, process.stdout),
                data        = '';

            input.setPrompt('Commit Message: (CTRL+C, when done) \n\n');
            input.prompt();

            input
                .on('line', function(line) {
                    //log('Line:', line);
                    //data += line + '\n';
                    data += '-m "'+line+'" ';
                })
                .on('close', function() {

                });
        });
    }
};