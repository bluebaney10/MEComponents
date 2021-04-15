var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('gulp4-run-sequence');

//add ts
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

var browserify = require("browserify");
var source = require("vinyl-source-stream");
var tsify = require("tsify");
var paths = {
  pages: ["src/*.html"],
};

// Basic Gulp task syntax
gulp.task('hello', function() {
  console.log('Hello Zell!');
})

// Development Tasks
// -----------------

// Start browserSync server
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  })
})

gulp.task('sass', function() {
  return gulp.src('app/components/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass().on('error', sass.logError)) // Passes it through a gulp-sass, log errors to console
    .pipe(sass({outputStyle: 'compressed' }))
    .pipe(gulp.dest('app/components/bundles')) // Outputs it in the css folder
    .pipe(browserSync.reload({ // Reloading with Browser Sync
      stream: true
    }));
})

// Watchers
gulp.task('watch', function() {
  runSequence(['sass', 'browserSync','ts'], 'watch');
  gulp.watch('app/components/**/*.scss', gulp.series('sass'));
  gulp.watch('app/components/**/*.ts', gulp.series('ts'));
  gulp.watch('app/components/*.html', browserSync.reload);
  gulp.watch('app/components/bundles/**/*.js', browserSync.reload);
})



// Optimization Tasks
// ------------------

// Optimizing CSS and JavaScript
gulp.task('useref', function() {

  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'));
});

// Optimizing Images
gulp.task('images', function() {
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
    .pipe(cache(imagemin({
      interlaced: true,
    })))
    .pipe(gulp.dest('dist/images'))
});

// Copying fonts
gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
})

// Cleaning
gulp.task('clean', function() {
  return del.sync('dist').then(function(cb) {
    return cache.clearAll(cb);
  });
})

gulp.task('clean:dist', function() {
  return del.sync(['dist/**/*', '!dist/images', '!dist/images/**/*']);
});

//add task ts
  gulp.task("copy-html", function () {
    return gulp.src(paths.pages).pipe(gulp.dest("dist"));
  });
  gulp.task(
    "ts",
    gulp.series(gulp.parallel("copy-html"), function () {
      return browserify({
        basedir: ".",
        debug: true,
        entries: ["app/components/components.ts"],
        cache: {},
        packageCache: {},
      })
        .plugin(tsify)
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("app/components/bundles"));
    })
  );

// Build Sequences
// ---------------

gulp.task('default', function(callback) {
  runSequence(['sass', 'browserSync','ts'], 'watch',
    callback
  )
})
/*
gulp.task('build', async function(callback){
    runSequence('clean:dist',['sass', 'useref', 'images', 'fonts'], callback)
})
*/

gulp.task('build', async function(callback) {
 runSequence(
    'clean:dist',
    'sass',
    ['useref', 'images', 'fonts'],
    callback
  )

})
