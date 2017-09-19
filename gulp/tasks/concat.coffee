gulp = require 'gulp'
$ = do require 'gulp-load-plugins'
handleErrors = require './handleErrors'
config = require '../config'

gulp.task 'concat', ->
	console.log config.concat.lib
	gulp.src(config.concat.lib)
	.pipe($.plumber())
	.pipe($.concat(config.concat.filename))
	.pipe(gulp.dest(config.concat.dest))