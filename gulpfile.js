var gulp = require('gulp')
var ngTranslate = require('gulp-angular-translate')
var clean = require('gulp-clean')
var header = require('gulp-header')
var footer = require('gulp-footer')
var concat = require('gulp-concat')
var jshint = require('gulp-jshint')
var cached = require('gulp-cached')
var remember = require('gulp-remember')
var ngConfig = require('gulp-ng-config')
var sass = require('gulp-sass')
var _ = require('underscore')

var cssGlob = 'assets/scss/**/*.scss'
var depsCssGlob = [
  'bower_components/angular/angular*.css',
  'bower_components/angular-bootstrap/ui-bootstrap*.css',
  'bower_components/bootstrap/dist/css/bootstrap*.css',
  'bower_components/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch*.css',
  'bower_components/fontawesome/css/font-awesome*.css',
  'bower_components/ng-slider/dist/css/angular-awesome-slider*.css'
]
var depsFontGlob = 'bower_components/bootstrap/fonts/*'
var depsImgGlob = 'bower_components/ng-slider/dist/img/*.png'
var depsScriptsGlob = [
  'bower_components/angular/angular*.js*(.map)',
  'bower_components/angular-sanitize/angular-sanitize*.js*(.map)',
  'bower_components/angular-bootstrap/ui-bootstrap*.js',
  'bower_components/angular-bootstrap-switch/dist/angular-bootstrap-switch*.js',
  'bower_components/angular-moment/angular-moment*.js*(.map)',
  'bower_components/angular-translate/angular-translate*.js',
  'bower_components/angular-ui-router/release/angular-ui-router*.js',
  'bower_components/bootstrap-switch/dist/js/bootstrap-switch*.js',
  'bower_components/jquery/dist/jquery*.js',
  'bower_components/moment/min/moment*.js',
  'bower_components/ng-slider/dist/angular-awesome-slider*.js',
  'bower_components/restangular/dist/restangular*.js',
  'bower_components/restangular/dist/restangular*.js',
  'bower_components/underscore/underscore*.js*(.map)'
]
var configFile = 'config/config.json'
var scriptsGlob = [
  'assets/ng/**/*_module.js',
  'assets/ng/**/*.js'
]
var templatesGlob = 'assets/ng/**/*.tmpl.html'
var translateGlob = 'config/locale-*.json'
var indexFile = 'assets/index.html'

gulp.task('clean', function() {
  return gulp.src('public/*', {read: false})
    .pipe(clean())
})

gulp.task('css', function() {
  return gulp.src(cssGlob)
    .pipe(cached('css'))
    .pipe(remember('css'))
    .pipe(sass())
    .pipe(gulp.dest('public/css'))
})

gulp.task('config', function() {
  return gulp.src(configFile)
    .pipe(ngConfig('rosieApp.config'))
    .pipe(gulp.dest('assets/ng/config'))
})

gulp.task('dependencies', ['dependencies:css', 'dependencies:js', 'dependencies:font', 'dependencies:img'])

gulp.task('dependencies:css', function() {
  return gulp.src(depsCssGlob)
    .pipe(gulp.dest('public/css'))
})

gulp.task('dependencies:font', function() {
  return gulp.src(depsFontGlob)
    .pipe(gulp.dest('public/fonts'))
})

gulp.task('dependencies:img', function() {
  return gulp.src(depsImgGlob)
    .pipe(gulp.dest('public/img'))
})

gulp.task('dependencies:js', function() {
  return gulp.src(depsScriptsGlob)
    .pipe(gulp.dest('public/js'))
})

gulp.task('index', function() {
  return gulp.src(indexFile)
    .pipe(gulp.dest('public'))
})

gulp.task('scripts', function() {
  return gulp.src(scriptsGlob)
    .pipe(cached('scripts'))        // only pass through changed files
    .pipe(jshint())                 // do special things to the changed files...
    .pipe(header('(function () {')) // e.g. jshinting ^^^
    .pipe(footer('})();'))          // and some kind of module wrapping
    .pipe(remember('scripts'))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/js'))
})

gulp.task('setup', ['dependencies', 'config', 'translate', 'css', 'scripts', 'templates', 'index'])

gulp.task('templates', function() {
  return gulp.src(templatesGlob)
    .pipe(cached('templates'))
    .pipe(remember('templates'))
    .pipe(gulp.dest('public/ng'))
})

gulp.task('translate', function() {
  return gulp.src(translateGlob)
    .pipe(ngTranslate('translations.js', {module: 'rosieApp.translations', standalone: false}))
    .pipe(gulp.dest('assets/ng/translations'))
})

gulp.task('watch', function () {
  setupWatcher(configFile, ['config'], 'config')
  setupWatcher(cssGlob, ['css'], 'css')
  setupWatcher(scriptsGlob, ['scripts'], 'scripts')
  setupWatcher(templatesGlob, ['templates'], 'templates')
  setupWatcher(translateGlob, ['translate'], 'translate')
  setupWatcher(indexFile, ['index'], 'index')
})

function setupWatcher(watches, task, namespace) {
  if (!_.isArray(watches)) {
      watches = [watches]
  }
  _.each(watches, function(watch) {
    var watcher = gulp.watch(watch, task)
    watcher.on('change', function (event) {
      if (event.type === 'deleted') {
        delete _.result(cached.caches, namespace)[event.path]
        remember.forget(namespace, event.path)
      }
    })
  })
}
