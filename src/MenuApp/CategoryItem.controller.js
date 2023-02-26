(function () {
'use strict';

angular.module('data')
.controller('CategoryItemController', CategoryItemController);
CategoryItemController.$inject = ['$stateParams','MenuDataService'];

function CategoryItemController($stateParams,MenuDataService) {
  var itemsC = this;
  itemsC.items = [];
  itemsC.$onInit = function () {
    MenuDataService.getItemsForCategory($stateParams)
    .then(function (result) {
      itemsC.items = result.data;
    });
  };
}


})();
