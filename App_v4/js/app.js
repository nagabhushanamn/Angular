var app = angular.module('store', []);

app.controller('StoreController', function($scope) {
	// this.product = item;
	// $scope.product = item;
	$scope.products = items;
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

// app.controller('ReviewFormController', function($scope) {
//
// $scope.review = {};
//
// $scope.saveReview = function(product) {
// product.reviews.push($scope.review);
// $scope.review = {};
// };
//
// });

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

// Model
var items = [ {
	name : 'Mobile',
	price : 1000.00,
	desc : 'New Model',
	canBuy : true,
	notAvailable : false,
	make : new Date(),
	images : [ {
		thumb : 'images/Mobile.png',
		full : ''
	}, {
		thumb : 'images/Mobile.png',
		full : ''
	} ],
	reviews : [ {
		stars : 4,
		author : 'naga@gmail.com',
		body : 'good one'
	}, {
		stars : 3,
		author : 'indu@gmail.com',
		body : 'bad one'
	} ]
}, {
	name : 'Laptop',
	price : 2000.00,
	desc : 'New Model',
	canBuy : true,
	notAvailable : false,
	make : new Date(),
	images : [ {
		thumb : 'images/Laptop.png',
		full : ''
	}, {
		thumb : 'images/Laptop.png',
		full : ''
	} ],

	reviews : [ {
		stars : 4,
		author : 'naga@gmail.com',
		body : 'good one'
	}, {
		stars : 3,
		author : 'indu@gmail.com',
		body : 'bad one'
	} ]
} ];
