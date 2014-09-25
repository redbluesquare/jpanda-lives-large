
	myApp.factory('dbFactory', function(){
		var factory = {};
		var tables = [
                    {"tablename":"ltak"},
                    {"tablename":"ltap"},
                    {"tablename":"zpack"}
                ];
		factory.getTables = function(){
			return tables;
		};
		var fields = [
                    {"tablename":"ltak", "Field":"qdatu"},
                    {"tablename":"ltak", "Field":"tonum"},
					{"tablename":"ltak", "Field":"mvtp"},
					{"tablename":"ltap", "Field":"qdatu"},
					{"tablename":"ltap", "Field":"tonum"},
					{"tablename":"ltap", "Field":"toitm"},
					{"tablename":"ltap", "Field":"mtnr"},
					{"tablename":"ltap", "Field":"qty"},
                    {"tablename":"zpack", "Field":"tonum"},
					{"tablename":"zpack", "Field":"pkmat"}
                ];
		factory.getFields = function(){
			return fields;
		};
		return factory;
	})
	.controller('dbController', function($scope, dbFactory){
		$scope.tables = dbFactory.getTables();
		$scope.fields = dbFactory.getFields();
	});
	
			
			
	myApp.config(function($routeProvider){
		$routeProvider.when('/view1',
		{
			controller:'dbController',
			templateUrl:'view1.html'
		}).when('/view2',
		{
			controller:'dbController',
			templateUrl:'view2.html'
		}).otherwise({redirectTo:'/view1'});
	});
	
		
