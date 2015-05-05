// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleLight();
    }
  });
})

angular.module('starter').config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider.state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
    });

    $stateProvider.state('tab.dash', {
        url: '/dash',
        views: {
            'tab-first': {
                templateUrl : 'templates/dash.html',
                controller: 'DashCtrl'
            }
        }
    });
    
    $stateProvider.state('tab.person', {
        url: '/person/:personId',
        views: {
            'tab-first': {
                templateUrl: 'templates/person.html',
                controller: 'PersonCtrl'
            }
        }
    });

    $stateProvider.state('tab.simple', {
        url: '/simple',
        views: {
            'tab-second': {
                templateUrl: 'templates/simple.html'
            }
        }
    });

    $urlRouterProvider.otherwise('/tab/dash');

});
