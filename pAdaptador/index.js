class Api {
	constructor(){
		this.operations = function(url, opts, verb) {
			switch (verb) {
				case 'get':
					//return fetch
				case 'post':
					//return fetch
			}
		};
	}

}

class Api2 {
	constructor() (local function)(url: any, opts: any): void
		this.get = function (url, opts) {
			// get fetch get
		}
		this.post = function (url, opts){
			//call fetch post
		}
	}
}

//Adaptador


class ApiAdapter {
	constructor() {
		const api2 = new Api2();

		this.operations = function (url, opts, verb) {
			switch (verb) {
				case 'get': 
					return api2.get(url, opts)
				case 'post':
					return api2.post(url, opts)
				default:
					return
			}
		};
	}
}


const api = new Api();
api.operations('www.google.com', { q:1 }, 'get');


const api2 = new Api2();
api2.get('www.google.com', { q:1 });


const adapter = new ApiAdapter();
adapter.operations('www.google,com', { q:1 }, get);
