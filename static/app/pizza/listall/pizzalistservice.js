import { App } from '../../module';

pizzaListService.$inject = ['$http']
function pizzaListService($http) {
    return {
        getPizzas: function () {
            return $http.get(
                // 'http://localhost:3000/pizzas'
                // 'http://localhost:8000/api/v1/pizzas'
                // resolveUrl.resolve('pizzas')
                'http://demo-pizzashop.herokuapp.com/api/v1/pizzas'
            );
        }
    };
}
App.service('pizzaListService', pizzaListService);
