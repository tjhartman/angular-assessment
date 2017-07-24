angular.module('assessment').controller('shopCtrl', function ($scope, shopService) {


    $scope.shopData = function () {
        shopService.shopData().then(function (response) {
            $scope.allData = response.data;
            console.log(response.data);


        });
    }
    $scope.shopData();
});