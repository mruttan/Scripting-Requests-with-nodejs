module.exports = function getHTML (options, callback) {

	/* Add your code here */
	var https = require('https');

	https.get(options, function (response) {

		var combined_chunks = "";

		response.setEncoding('utf8');

		response.on('data', function (data) {
			combined_chunks += data;
		});

		response.on('end', function() {
			console.log('Response stream complete.');
			callback(combined_chunks);
		});

	});

}