var myModule = angular.module("HelloAngular", []);

myModule.controller("Commoncontroller", ['$scope',
    function($scope){
        $scope.commonFn = function(){
            alert("这里是通用功能")
        }
    }
]);

myModule.controller("Controller1", ['$scope',
    function($scope) {
        $scope.greeting = {
            test:'hello1'
        }
        $scope.test1=function(){
            alert("test1")
        }
    }
]);

myModule.controller("Controller2", ['$scope',
    function($scope) {
        $scope.greeting = {
            test:'hello2'
        }
        $scope.test2=function(){
            alert("test2")
        }
    }
]);