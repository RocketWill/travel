var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch',function(){

  browserSync.init({
    notify: false,
    server:{
      baseDir:'app'
    }
  });

  watch('./app/index.html',function(){
    browserSync.reload();
  });

  watch('./app/assets/style/**/*.css',function(){
    gulp.start('cssInject');
  });

  watch('./app/assets/scripts/**/*.js', function(){
    gulp.start('scriptsRefresh');
  });
});

gulp.task('cssInject', ['style'], function(){
  return gulp.src('./app/temp/style/style.css')
    .pipe(browserSync.stream());

});

gulp.task('scriptsRefresh', ['scripts'], function(){
  browserSync.reload();
});
