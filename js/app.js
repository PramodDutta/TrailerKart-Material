var myApp = angular.module('myApp',['ngMaterial']);

myApp.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {


    var randomPage  = Math.floor(Math.random()*2000);
   var latest  = true;


    if ( latest){
        randomPage = 1;
    }


    $scope.loading = true;
    var url  = 'https://yts.ag/api/v2/list_movies.json?page='+randomPage+'&limit=20&sort_by=year,rating';
    console.log(' In Function : '+randomPage);
    $http({
        method: 'GET',
        url: url
    }).then(function successCallback(response) {
        //$scope.loading = true;
        var getData = $scope.data =  response.data;
        $scope.todos =  getData.data.movies;
        $scope.loading = false;


    }, function errorCallback(response) {

    });


        // Animation Logic

        var urlAnimation = 'https://yts.ag/api/v2/list_movies.json?genre=animation';
        $http({
            method: 'GET',
            url: urlAnimation
        }).then(function successCallback(response) {
            console.log('Got Data for Animation'+response.data);
            var getData = $scope.data =  response.data;
            $scope.todosAnimation =  getData.data.movies;


        }, function errorCallback(response) {

        });






}]);



