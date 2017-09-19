notify = require('gulp-notify')

module.exports = ->
	args = Array.prototype.slice.call(arguments)
	notify.onError
		title: "error",
		message: "<%= error%>"
	.apply(this,args)
	this.emit('end')