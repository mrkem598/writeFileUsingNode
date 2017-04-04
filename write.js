
var fs = require('fs');
fs.writeFile('movie.txt', 'John Wick, cinderela, Titanic', function(error) {
	if (error){
	return console.error(error);
}
console.log('file created');
});