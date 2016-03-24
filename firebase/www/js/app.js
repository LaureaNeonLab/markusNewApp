angular.module('starter', ['ionic'])

.controller('ListCtrl', function($scope, $ionnicListDelegate){
    $scope.items = [];  
    
    $scope.addItem = function(){
        var name = prompt('What would you like to add?');
        if(name){
            $scope.item.push({
                'name': name
            });
        }
    }
 
    $scope.purchaseItem = function(item){
        $scope.item = item;
        $scope.item['status'] = 'purchased';
        $ionicListDelegate.closeOptionButton();
    };     
    
});