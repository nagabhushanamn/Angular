(function() {

	var pmModule = angular.module('pm', [ 'ngRoute' ]);

	pmModule.config(function($routeProvider) {

		$routeProvider.when("/", {
			templateUrl : "templates/pm-home.html"
		}).when("/view-all", {
			templateUrl : "templates/pm-grid.html",
			controller: "ViewAllController"
		}).when("/new", {
			templateUrl : "templates/pm-product-form.html",
			controller: "SaveOrUpdateOrViewController"
		})
		.when("/edit/:prodId", {
			templateUrl : "templates/pm-product-form.html",
			controller: "SaveOrUpdateOrViewController"
		});
		
		$routeProvider.otherwise({redirectTo:'/'});


	});

	
	pmModule.controller('ViewAllController', function($scope, productsService,$route) {
		productsService.loadAll()
		.then(function(value) {
			$scope.products=value;
		});
		$scope.remove=function(id){
			productsService.remove(id)
			.then(function(value) {
				$route.reload();
			});
		};
	});

	pmModule.controller('SaveOrUpdateOrViewController', function($scope, productsService,$location,$routeParams) {
		
		var prodId=$routeParams.prodId;
		
		if(!prodId){
		$scope.product={};
		}else{
			productsService.viewById(prodId)
			.then(function(value) {
				$scope.product=value;
				$scope.action='update';
			});
		}
		
		$scope.save=function(){
			
			if($scope.action!=='update'){
			productsService.addNew($scope.product)
			.then(function(value) {
				$scope.product={};
				//$scope.message='New Product saved..'
				$location.path('view-all');
			});
			}else{
				productsService.update($scope.product)
				.then(function(value) {
					$scope.product={};
					//$scope.message='New Product saved..'
					$location.path('view-all');
				});
			}
			
		};
		
	});

	
	//-------------------------------------------------------------------------
	
	pmModule.factory('productsService', function($q, $http) {

		var url = "http://localhost:3000/api/products";

		var service = {
			loadAll : function() {
				var defer = $q.defer();
				$http.get(url).then(function(result) {
					defer.resolve(result.data);
				});
				return defer.promise;
			},
			viewById : function(id) {
				var defer = $q.defer();
				$http.get(url + "/" + id).then(function(result) {
					defer.resolve(result.data);
				});
				return defer.promise;
			},
			addNew : function(newProduct) {
				var defer = $q.defer();
				var promise = $http.post(url, newProduct);
				promise.then(function(result) {
					defer.resolve(result.data);
				});
				return defer.promise;
			},
			update : function(product) {
				var defer = $q.defer();
				var promise = $http.put(url, product);
				promise.then(function(result) {
					defer.resolve(result.data);
				});
				return defer.promise;
			},
			remove : function(id) {
				var defer = $q.defer();
				$http['delete'](url + "/" + id).then(function(result) {
					defer.resolve(result.data);
				});
				return defer.promise;

			}

		};
		return service;
	});
	
	//--------------------------------------------------------------------------

})();
