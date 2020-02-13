// Code goes here
(function(){
  
  var app = angular.module('todoApp',[]);
  
  app.controller('TodoCtrl',['$scope',function($scope){
    $scope.todos=[
        {
        title:'운동하기',
        completed: true,
        createdAt: Date.now()
        },
        {
        title:'요리하기',
        completed: false,
        createdAt: Date.now()
        },
        {
        title:'공부하기',
        completed: false,
        createdAt: Date.now()
        }
      ];
    
  }]);
  
})();
