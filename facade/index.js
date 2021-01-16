const https = require('https');

const get = url => new Promise((resolvers, rej) => {
	const camp = url.split('/');
	const host = camp.shift();
	const options = { 
		host, 
		path: `/${camp.join('/')}`,
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
			resolvers(parsed)
		});
	});

	req.on('error', (s) => {
		rej(res);
	});

	req.end(); 

});

const main = async () => {
	const res =  await get('jsonplaceholder.typicode.com/users');
	console.log(res)
}
main();
