angular.module('starter.controllers', []);

angular.module('starter.controllers').controller('DashCtrl', function($scope, Friends) {
    $scope.people = Friends.all();
});

angular.module('starter.controllers').controller('PersonCtrl', function($scope, Friends, $stateParams) {
});
