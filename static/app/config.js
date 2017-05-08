import { App } from './module';

config.$inject = ["$stateProvider", "$urlRouterProvider"];
export function config(stateProvider, urlRouterProvider) {
    urlRouterProvider.otherwise('/pizzalist');
    stateProvider
        .state('app', {
            url: '/',
            component: 'ilApp'
        })
        .state('pizzalist',{
            parent: 'app',
            url: 'pizzalist',
            component:'ilPizzaList'
        })
        .state('pizzas',{
            parent: 'app',
            url: 'pizzas/:id',
            component: 'ilPizza'
        });
}

App.config(config);  