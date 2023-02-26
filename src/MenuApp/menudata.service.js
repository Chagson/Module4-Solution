(function(){
'use strict';
angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.inject = ['$http'];
function MenuDataService($http){
  var service = this;
  service.data = [];
  service.getAllCategories = function (){
    return $http({
        method: "GET",
        url:("https://coursera-jhu-default-rtdb.firebaseio.com/categories.json")
      });
    };

  service.getItemsForCategory = function(categoryShortName){
    console.log(categoryShortName);
    return $http({
        method: "GET",
        url:("https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/L.json")
      });
  };
}



})();
