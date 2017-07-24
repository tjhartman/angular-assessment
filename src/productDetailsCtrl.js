angular.module('assessment').controller('productDetailsCtrl', function($scope, $stateParams, shopService){
    
    console.log($stateParams);

    $scope.getProductById = function(id){
        shopService.getProduct(id).then(function(response){
            $scope.product = response.data
            console.log($scope.product);
        });
    }

    $scope.getProductById($stateParams.id);

})