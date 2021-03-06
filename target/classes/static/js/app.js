let homeApp = angular.module("mainApp", ["ngRoute", "xeditable"]);
homeApp.run(function(editableOptions, editableThemes) {
  editableOptions.theme = 'bs3';
	editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-sm"><i class="fa fa-check-square" aria-hidden="true"></i></button>';
});

homeApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'templates/CreateModule.html',
    resolve: {
      availableObjects : ['ObjectService', function(ObjectService){
        return ObjectService.getAllObjects();
      }]
    },
		controller : 'CreateModuleController'
	})
  .when('/saveData',{
		templateUrl: 'templates/saveData.html',
    resolve: {
      availableObjects : ['ObjectService', function(ObjectService){
        return ObjectService.getAllObjects();
      }]
    },
		controller : 'SaveDataController'
	})
	.otherwise({
		redirectTo: '/'
	})
}]);
