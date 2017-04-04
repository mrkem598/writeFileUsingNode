//includes the FS package for writing the package
var fs = require('fs');
//running the write file module inside of fs
//store the write information into the variable data
fs.writeFile('movie.txt', 'John Wick, cinderela, Titanic', function(error) {
	if (error){
	return console.error(error);
}
console.log('file created');
});