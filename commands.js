
var fs = require('fs');
var rq = require('request')

module.exports = {

//pwd command
//
curl : function(file){
	var url = 'http://www.'+file
	rq(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
})
},

pwd: function(file){
	process.stdout.write(process.cwd());
	process.stdout.write('\nprompt > ');
},


//date command
date: function(file){
	var output = new Date;
	process.stdout.write(output.toString());
	process.stdout.write('\nprompt > ');
},

ls: function(file){
	fs.readdir('.', function(err, files) {
  		if (err) throw err;
  		files.forEach(function(file) {
    	process.stdout.write(file.toString() + '\n');
  		})
 	process.stdout.write('prompt > ');
	});
},

echo: function(file){
	var output = file.join(" ")
	process.stdout.write(output);
	process.stdout.write('\nprompt > ');
},

cat: function(file){
	var fileName = './' + file;
	fs.readFile(fileName, function(err, contents) {
  		if (err) throw err;
  		console.log(contents.toString())
  		})
 	process.stdout.write('prompt > ');
},

head: function(file){

}



};




/*pwd: process.stdin.on('data', function(data){
	var input = data.toString().trim();
	var output;
	if (input ==='pwd'){
		output = process.cwd();
		process.stdout.write(output);
	}
	if (input ==='date'){
		output = new Date;
		process.stdout.write(output.toString());
	}
	process.stdout.write('\nprompt > ');
}),


//date command
date: process.stdin.on('data', function(data){
	var input = data.toString().trim();
	var output;
	if (input ==='date'){
		output = new Date;
		process.stdout.write(output.toString());
	}
	process.stdout.write('\nprompt > ');
})*/
