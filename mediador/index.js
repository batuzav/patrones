const Emitler = (() => {
	const topics = {};
	const hOP = topics.hasOwnProperty;

	return {
		on: (topic, listener) => {
			if(!hOP.call(topics, topic)) topics[topic] = [];
			topics[topic].push(listener)
		},
		emit: (topic, info) => {
			if(!hOP.call(topics, topic)) return
			topics[topic].forEach(item => 
				item(info != undefined ? info : {}))
			}
		}
 })();

Emitler.on('lala', x => console.log(x))

Emitler.on('lala', { lala: 'lolo' })




