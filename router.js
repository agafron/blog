

angular.module('myApp', ['ui-router'])

	.config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('main', {
				url: '/',
				templateURL: 'parts/main_part.html'
			})
			.state('list.detail', {
				url: '/list/:id',
				templateURL: 'parts/main_part.html',
				controller: function ($scope, list) {
					$scope.list = list.data;
				},
				resolve: {
					news: function (newsService, $atateParams) {
						return newsService.get({id: $stateParams.id});
					}
				}
			})
	})

	.component('goodWork', {
		template: '{{$ctrl.name}}',
		controller: function () {
			this.name = 'Alex';
		}

	})
	.component('goodPhone', {
		template: '{{$ctrl.name}}',
		controller: function () {
			this.name = '8888';
		}

	})