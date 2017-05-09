import { App } from './module';

config.$inject = ["$stateProvider", "$urlRouterProvider"];
export function config(stateProvider, urlRouterProvider) {
    urlRouterProvider.otherwise('/pizzas');
    stateProvider
        .state('app', {
            url: '/',
            component: 'ilApp'
        })
        .state('pizzalist',{
            parent: 'app',
            url: 'pizzas',
            component:'ilPizzaList'
        })
        .state('pizzas',{
            parent: 'app',
            url: 'pizzas/:id',
            component: 'ilPizza'
        });
}

App.config(config);  