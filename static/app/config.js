import { App } from './module';

config.$inject = ["$stateProvider", "$urlRouterProvider"];
export function config(stateProvider, urlRouterProvider) {
    urlRouterProvider.otherwise('/');
    stateProvider
        .state('otherwise', {
            url: '/',
            component: 'il-app'
        });
}

App.config(config);