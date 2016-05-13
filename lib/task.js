'use strict';

var cli = process.argv.slice(2)[0]
var tasks = Object.create(null);

function error(err) {
	console.error(err && err.stack || err);

	return exports;
}


function run(name) {
	name = name || 'default';


	return Promise
		.resolve(tasks[name](cli))
		.catch(error);
}

function task(name, callback) {
	if (typeof name !== 'string') {
		console.log('\x1b[31m', 'ERROR:', '\x1b[0m', 'Name of task must be string.' );
	}

	if (typeof callback !== 'function') {
		console.log('\x1b[31m', 'ERROR:', '\x1b[0m', 'Callback of Task must be Function' );
	}

	tasks[name] = callback;

	return exports;
}

exports.cli = cli;
exports.error = error;
exports.run = run;
exports.task = task;


process.nextTick(run);
