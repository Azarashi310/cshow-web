gulp = require('gulp')
$ = do require 'gulp-load-plugins'
handleErrors = require './handleErrors'
config = require('../config')

gulp.task 'style', ->
	$.rubySass(config.style.src,
		sourcemap: false
# style: 'compressed'
		noCache: true
		compass: true
	)
	.pipe( $.cached('style') )
	.pipe( $.autoprefixer( config.style.autoprefixer_opt ) )
	.pipe( $.combineMediaQueries( config.style.cmq_opt ) )
	#.pipe( $.sourcemaps.write() )
# .on('error', handleErrors)
	.pipe( gulp.dest(config.style.dest) )