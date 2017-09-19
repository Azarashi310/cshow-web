gulp = require('gulp')
webpack = require('gulp-webpack')
handleErrors = require('./handleErrors')
config = require('../config')

gulp.task('webpack', ->
	gulp.src(config.webpack.src)
	.pipe(webpack(config.webpack))
	.on('error',handleErrors)
	.pipe(gulp.dest(config.webpack.dest))
)