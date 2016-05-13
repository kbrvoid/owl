var owl = require('./lib/task');

function foo() {
	console.log('should run default task');
}

function bar() {
	console.log('should run named task');
}

function baz() {
	throw new Error('should throw');
}



owl.task('default', foo)
	.task('test', bar)
	.task('throw', baz);