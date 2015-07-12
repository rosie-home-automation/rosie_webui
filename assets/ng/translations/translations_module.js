angular.module('rosieApp.translations', [
  'ngSanitize',
  'pascalprecht.translate',
  'rosieApp.config'
])
  .config(['$translateProvider', 'DEFAULT_LOCALE', function($translateProvider, DEFAULT_LOCALE) {
    $translateProvider.useSanitizeValueStrategy('sanitize')
    $translateProvider.preferredLanguage(DEFAULT_LOCALE)
  }])
