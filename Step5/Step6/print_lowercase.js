var getHTML = require('./step6-module');

var requestOptions = {
	host: 'sytantris.github.io',
	path: '/http-examples/step6/uppercase.html'
};

function printLowerCase (html) {
  console.log(html.toLowerCase());
}

getHTML(requestOptions, printLowerCase);