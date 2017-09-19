gulp = require('gulp')
$ = do require 'gulp-load-plugins'
config = require('../config')

gulp.task 'watch', ->
	$.watch(config.watch.pass.jade, ->
		gulp.run('jade')
	)
	$.watch(config.watch.pass.jade_tmp, ->
		gulp.run('jade_tmp')
	)
	$.watch(config.watch.pass.style, ->
		gulp.run('style')
	)
	$.watch(config.watch.pass.webpack, ->
		gulp.run('webpack')
	)
