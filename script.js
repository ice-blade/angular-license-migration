// Code goes here

var migrateLicenses = angular.module('migrateLicenses', []);

migrateLicenses.controller('SearchController', function($scope, $http) {
	  var onSearchComplete = function(response){
  		$scope.CRMLicenses = 5;
  		$scope.MISLicenses = 2;
  	
	    $scope.CRMLicenseList = [
  		{
  		  customer : "Customer 1",
  			contract: "Annual Entitlment 2016/17",
  			product: "SIMS Agora 7",
  			startDate: "01/04/2016",
  			endDate: "31/03/2017"
  		},
  		{
  		  customer : "Customer 2",
  			contract: "Annual Entitlment 2016/17",
  			product: "SIMS Agora 7",
  			startDate: "01/04/2016",
  			endDate: "31/03/2017"
  		},
  		{
  		  customer : "Customer 3",
  			contract: "Annual Entitlment 2016/17",
  			product: "SIMS Agora 7",
  			startDate: "01/04/2016",
  			endDate: "31/03/2017"
  		},
  		{
  		  customer : "Customer 4",
  			contract: "Annual Entitlment 2016/17",
  			product: "SIMS Agora 7",
  			startDate: "01/04/2016",
  			endDate: "31/03/2017"
  		},
  		{
  		  customer : "Customer 5",
  			contract: "Annual Entitlment 2016/17",
  			product: "SIMS Agora 7",
  			startDate: "01/04/2016",
  			endDate: "31/03/2017"
  		}];
  		
  		$scope.MISLicenseList = [
  		{
  		  customer : "Customer 1",
  			contract: "Annual Entitlment 2016/17",
  			product: "SIMS Agora 7",
  			startDate: "01/04/2016",
  			endDate: "31/03/2017"
  		},
  		{
  		  customer : "Customer 2",
  			contract: "Annual Entitlment 2016/17",
  			product: "SIMS Agora 7",
  			startDate: "01/04/2016",
  			endDate: "31/03/2017"
  		}];
	  };
	  
	  var onError = function(reason){
	    $scope.error = "Could not fetch license data";
	  };
	  
	  $scope.searchLicenses = function(searchText){
	    $http.get("https://api.github.com/users/ice-blade")
	    .then(onSearchComplete, onError);
	  };
});