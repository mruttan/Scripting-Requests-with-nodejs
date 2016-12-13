function getAndPrintHTML () {

	var requestOptions = {
		host: 'sytantris.github.io',
		path: '/http-examples/step2.html'
	};

	/* Add your code here */
	var https = require('https');

	https.get(requestOptions, function (response) {

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

getAndPrintHTML();