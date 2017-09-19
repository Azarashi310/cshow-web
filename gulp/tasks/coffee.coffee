gulp = require('gulp')
cache = require('gulp-cached')
coffee = require('gulp-coffee')
jshint = require('gulp-jshint')
stylish = require('jshint-stylish')
handleErrors = require './handleErrors'
config = require('../config')

gulp.task 'coffee', ->
	gulp.src(config.coffee.src)
	.pipe(cache('coffee'))
	.on('error', handleErrors)
	.pipe(coffee(config.coffee.opt))
	.pipe(jshint())
	.pipe(jshint.reporter(stylish))
	.pipe(gulp.dest(config.coffee.dest))