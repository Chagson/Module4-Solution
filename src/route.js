(function () {
'use strict';
angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
// by Default
$urlRouterProvider.otherwise('/');

$stateProvider
.state('home', {
  url: '/',
  templateUrl: 'src/MenuApp/templates/home.template.html'
})

.state('categories',{
  url:'/categories',
  templateUrl:'src/MenuApp/templates/categories.template.html',
  controller: 'CategoriesController as categoryControle',
  resolve: {
    categories: ['MenuDataService',function(MenuDataService){
      return MenuDataService.getAllCategories();
    }]
  }
})
.state('categories.items',{
  url:'/items/{categoryShortName}',
  templateUrl:'src/MenuApp/templates/items.template.html',
  controller: 'CategoryItemController as itemsControle'
});
}
})();
