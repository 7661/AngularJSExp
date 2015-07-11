myApp.controller('controllerList[0]',['$scope', function($scope) {
   		$scope.student = {
      			firstName: "Tapas",
      			lastName: "",
      			fullName: function() {
         		var studentObject;
         		studentObject = $scope.student;
         		return studentObject.firstName + " " + studentObject.lastName;
      			},
			
			subjects:[
         			{name:'Physics',marks:70},
         			{name:'Chemistry',marks:80},
         			{name:'Math',marks:65},
		 		{name:'English',marks:75},
		 		{name:'Hindi',marks:67}
      			]
   		};
		$scope.buttonText = "Hide";
		
		$scope.hide = function(){		
		$scope.hideName = !$scope.hideName;
		if($scope.buttonText == "Hide"){$scope.buttonText = "Show";}
		else{$scope.buttonText = "Show";}		
		};
		
		$scope.moreButton = true;
		$scope.more = function(){		
		$scope.moreButton = !$scope.moreButton;		
		};
		
	}]);

