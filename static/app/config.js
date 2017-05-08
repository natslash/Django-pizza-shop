import { App } from './module';

config.$inject = ["$stateProvider", "$urlRouterProvider"];
export function config(stateProvider, urlRouterProvider) {
    urlRouterProvider.otherwise('/');
    stateProvider
        .state('app', {
            url: '/',
            component: 'ilApp'
        })
        .state('pizzalist',{
            parent: 'app',
            url: 'pizzalist',
            component:'ilPizzaList'
        });
}

App.config(config); 