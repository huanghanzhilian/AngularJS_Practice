/*function Commoncontroller($scope) {
    $scope.commonFn = function(){
    	alert("这里是通用功能")
    }
}

function Controller1($scope) {
    $scope.greeting = {
    	test:'hello1'
    }
    $scope.test1=function(){
    	alert("test1")
    }
}

function Controller2($scope) {
    $scope.greeting = {
    	test:'hello2'
    }
    $scope.test2=function(){
    	alert("test2")
    }
}*/


var myModule = angular.module("HelloAngular", []);

myModule.controller("Commoncontroller", ['$scope',
    function Commoncontroller($scope){
        $scope.commonFn = function(){
            alert("这里是通用功能")
        }
    }
]);

myModule.controller("Controller1", ['$scope',
    function Controller1($scope) {
        $scope.greeting = {
            test:'hello1'
        }
        $scope.test1=function(){
            alert("test1")
        }
    }
]);

myModule.controller("Controller2", ['$scope',
    function Controller2($scope) {
        $scope.greeting = {
            test:'hello2'
        }
        $scope.test2=function(){
            alert("test2")
        }
    }
]);