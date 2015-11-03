describe("A calc suite", function() {

	// it("shud be true", function() {
	// expect(true).toBe(true);
	// });
	//	

	beforeEach(module('calculator'));

	var $controller;

	beforeEach(inject(function(_$controller_) {
		// The injector unwraps the underscores (_) from around the parameter
		// names when matching
		$controller = _$controller_;
	}));

	it("returning correct result on addition", function() {

		// expect(true).toBe(true);

		var $scope = {};
		var controller = $controller('CalcController', {
			$scope : $scope
		});

		$scope.first = 12;
		$scope.second = 12;
		$scope.doAddition();

		expect($scope.latest).toEqual(24);

	});

	it("returning correct result on subtract", function() {

		// expect(true).toBe(true);

		var $scope = {};
		var controller = $controller('CalcController', {
			$scope : $scope
		});

		$scope.first = 12;
		$scope.second = 12;
		$scope.operator = '-';
		$scope.doAddition();

		expect($scope.latest).toEqual(0);

	});

});