(function(){
'use strict';
angular.module('data')
.component('categories',{
  templateUrl:'src/MenuApp/templates/categoriesSecond.html',
  controller:controlle,
  bindings: {
    categorie: '<'
  }
});

function controlle(){
  var $crtl = this;
  console.log($crtl.categorie);
}
})();
