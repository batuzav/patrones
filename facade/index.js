const https = require('https');

const options = { 
	host: "jsonplaceholder.typicode.com",
	path: "/users",
	method: "get",
}

const req = https.request(options, res => {
	res.setEncoding('utf-8')
	let body = '';
	
	res.on('data', d => {
		body += d;
	}); 
	
	res.on('end', d => {
		const parsed = JSON.parse(body);
		console.log(parsed)
	});
});

req.on('error', (s) => {
	console.log(s);
});

req.end(); 




