var commands = require('./commands');
//var fs = require('fs');

process.stdout.write('prompt > ');

process.stdin.on('data', function(data){
	var userCommand = data.toString().trim().split(' ');
	var firstArg = userCommand[0];
	commands[firstArg](userCommand.slice(1));
});
