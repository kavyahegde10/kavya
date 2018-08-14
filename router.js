app
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/index.html',
      controller: 'studentController'
    })

    .state('student', {
        url: '/student',
        template: `
        <div><h1>Student List</h1></div>
        `,
        controller: 'studentController'
      });

  $urlRouterProvider.otherwise('home');
}])