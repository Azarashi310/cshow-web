gulp = require('gulp')
$ = do require 'gulp-load-plugins'
handleErrors = require('./handleErrors')
config = require('../config')

gulp.task 'jade', ->
	return gulp.src(config.jade.src)
		.pipe($.cached('jade'))
		.pipe($.jade( config.jade.opt ))
		.on('error', handleErrors)
		.pipe(gulp.dest(config.jade.dest))
gulp.task 'jade_tmp', ->
	gulp.src(config.jade.src)
		.pipe($.jade(config.jade.opt))
		.on('error',handleErrors)
		.pipe(gulp.dest(config.jade.dest))