var app = angular.module('pickPres', []);


app.controller('FirstController', ['$scope', '$http', function($scope, $http) {

    var combinedArray = [];
    //console.log($scope.duckNames);
    $scope.candidates = function() {
        $scope.getDems();
        $scope.getReps();
    };

    $scope.getDems = function() {
        $http({
            method: 'GET',
            url: 'assets/data/ducksocratic.json'
        }).then(function successCallback(response) {
            $scope.ducks = response.data;
            combinedArray.push(response.data);
        }, function errorCallback(response) {
            console.log("Oh, no!!");
        });
    }

    $scope.getReps = function() {
        $http({
            method: 'GET',
            url: 'assets/data/repurrrrblican.json'
        }).then(function successCallback(response) {
            $scope.cats = response.data;
            combinedArray.push(response.data);
        }, function erroCallback(response) {
            console.log("Oh, no!!");
        });
    }
    $scope.president = function() {
        var randNum = Math.floor((Math.random()* combinedArray.length));
        var randName = Math.floor((Math.random()* combinedArray[randNum].length));
        $scope.winner = combinedArray[randNum][randName];
        console.log(combinedArray);

        //$scope.winner = combinedArray[randNum];
        //return $scope.winner;
    }

}]);