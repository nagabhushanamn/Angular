var app = angular.module('store', []);

app.controller('StoreController', function($scope, productsService) {

	var promise = productsService.loadAll();
	promise.then(function(result) {
		$scope.products = result;
		console.log($scope.products);
	}, function(reason) {

	}, function(value) {

	});

});

app.controller('TabsController', function($scope) {

	$scope.tab = 1;

	$scope.chanhgeTab = function(tabValue) {
		$scope.tab = tabValue;
	};

	$scope.isTabselected = function(tabValue) {
		return $scope.tab === tabValue;
	};

});

app.directive('productTitle', function() {

	return {
		restrict : "E",
		replace : true,
		templateUrl : "templates/product-title.html",
		link : function(scope, elem, attrs) {

			elem.on('mouseenter', function() {
				elem.css('background-color', '#def');
			});

			elem.on('mouseleave', function() {
				elem.css('background-color', '#fff');
			});

		}
	};

});

app.directive('productTabs', function() {

	return {
		restrict : "E",
		replace : true,
		templateUrl : "templates/product-tabs.html",
		controller : 'TabsController'

	};

});

app.directive('productReviewForm', function() {

	return {
		restrict : "E",
		replace : true,
		templateUrl : "templates/product-review-form.html",
		controller : function($scope) {

			$scope.review = {};

			$scope.saveReview = function(product) {
				product.reviews.push($scope.review);
				$scope.review = {};
			};

		}
	};

});

app.filter('priceDiscount', function() {
	return function(originalPrice) {
		return originalPrice - 1;
	};
});

app.factory('productsService', function($q, $http) {

	var url = "http://localhost:3000/products";

	return {

		save : function(product) {

		},
		findOne : function(id) {

		},
		loadAll : function() {

			var defer = $q.defer();
			var promise = $http.jsonp(url+"?callback=abc");
			promise.then(function(result) {
				console.log('After result...');
				console.log(result);
				defer.resolve(result.data);
			}, function(reason) {
				defer.reject('Oops ');
			}, function(value) {
				defer.notify('Pls wait....');

			});

			return defer.promise;
		},
		update : function(product) {

		},
		remove : function() {

		}

	};

});
