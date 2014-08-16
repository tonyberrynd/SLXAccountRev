angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope, ItemsService) {
  //$scope.newItem = { Name: '', Total: 0, Jan: 0, Feb: 0, Mar: 0, Apr: 0, May: 0, Jun: 0, 
  //  Jul:0, Aug: 0, Sep: 0, Oct: 0, Nov: 0, Dec: 0 };
  //$scope.currentItem = null;

  $scope.items = ItemsService.getItems();

  $scope.types = ['Repair', 'Maint', 'Storm']; 

  $scope.addItem = function () {
    ItemsService.addItem(angular.copy($scope.newItem));
    $scope.newItem = { Type: '', Total: 0, Jan: 0, Feb: 0, Mar: 0, Apr: 0, May: 0, Jun: 0, 
    Jul:0, Aug: 0, Sep: 0, Oct: 0, Nov: 0, Dec: 0 };
  };

  $scope.updateItem = function (id) {
      //Update totals before doing update 
      $scope.items[id].Total = 
        parseInt($scope.items[id].Jan) + parseInt($scope.items[id].Feb) + parseInt($scope.items[id].Mar) +
        parseInt($scope.items[id].Apr) + parseInt($scope.items[id].May) + parseInt($scope.items[id].Jun) +
        parseInt($scope.items[id].Jul) + parseInt($scope.items[id].Aug) + parseInt($scope.items[id].Sep) +
        parseInt($scope.items[id].Oct) + parseInt($scope.items[id].Nov) + parseInt($scope.items[id].Dec);
      
      ItemsService.updateItem(id);
  };

  $scope.removeItem = function (id) {
      ItemsService.removeItem(id);
  };




});