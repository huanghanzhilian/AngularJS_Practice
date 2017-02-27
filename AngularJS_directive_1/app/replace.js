var myModule = angular.module("MyModule", []);
myModule.directive("hello", function() {
    return {
    	restrict:"AE",
    	trabsclude:true,
    	template:"<div>Hello everyone!</div>",
    	replace:true
    } 
});