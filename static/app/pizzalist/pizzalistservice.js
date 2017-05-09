import { App } from '../module';

pizzaListService.$inject = ['$http']
function pizzaListService($http) {
    return {
        getPizzas: function () {
            return $http.get(
                'http://localhost:3000/pizzas'
            );
        }
    };
}
App.service('pizzaListService', pizzaListService);
