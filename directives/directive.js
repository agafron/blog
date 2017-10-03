/*app.directive('mainDir', function () {
    return {
        scope: {
          name: '=',
        },
        controller:  'mainCtrl',
        controllerAs: 'vm',     
        templateUrl: 'parts/main_part.html'
    	}
});*/
app.directive('commentDir', function () {
	return {
        scope: {
          name: '=',
        },
        //controller:  'commentCtrl',
        //controllerAs: 'commentVm',     
        templateUrl: 'parts/comment_part.html'
		}
});
app.directive('loginDir', function () {
	return {
        scope: {
          name: '=',
        },
        controller:  'loginCtrl',
        controllerAs: 'loginVm',     
        templateUrl: 'parts/login_part.html'
		}
});