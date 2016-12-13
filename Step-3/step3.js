function getAndPrintHTML (options) {

	/* Add your code here */
	var https = require('https');

	https.get(options, function (response) {

		var combined_chunks = "";

		response.setEncoding('utf8');

		response.on('data', function (data) {
			combined_chunks += data;
		});

		response.on('end', function() {
			console.log(combined_chunks);
			console.log('Response stream complete.');
		});

	});

}

var requestOptions = {
	host: 'sytantris.github.io',
	path: '/http-examples/step2.html'
};


getAndPrintHTML(requestOptions);