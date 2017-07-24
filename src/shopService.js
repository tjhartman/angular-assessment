angular.module('assessment').service('shopService',function($http){

    this.shopData = function(){
        return $http.get('https://practiceapi.devmountain.com/products');
    };

    this.getProduct = function(id){
        return $http.get('https://practiceapi.devmountain.com/products/'+id);
    };

})