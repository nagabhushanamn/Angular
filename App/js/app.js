var app = angular.module('store', []);

app.controller('StoreController', function($scope) {
	// this.product = item;
	// $scope.product = item;
	$scope.products = items;
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
	} ]
} ];
