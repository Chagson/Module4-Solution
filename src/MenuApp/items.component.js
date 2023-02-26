(function(){
'use strict';
angular.module('data')
.component('items',{
  templateUrl:'src/MenuApp/templates/itemsSecond.html',
  bindings: {
    items: '<'
  }
});

})();
