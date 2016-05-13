
	var cli = process.argv.slice(3)[0]
	var tasks = {};
	function task(name, callback) {
		tasks[name] = callback;
		return exports;
	}
	
	function run(name) {
		name = name || 'default'
		
		return Promise
			.resolve(tasks[name](cli))
	}
process.nextTick(run)
exports.task = task
