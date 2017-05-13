import { App } from '../../module';

pizzaListService.$inject = ['$http', 'resolveUrl']
function pizzaListService($http, resolveUrl) {
    return {
        getPizzas: function () {
            return $http.get(
                // 'http://localhost:3000/pizzas'
                // 'http://localhost:8000/api/v1/pizzas'
                resolveUrl.resolve('pizzas')
            );
        }
    };
}
App.service('pizzaListService', pizzaListService);
