import { App } from '../module';
import html from '../../templates/pizzashop/pizzalist.html';

// const html = `
// <div ng-repeat="pizza in $ctrl.pizzas">
//     <div>{{pizza.name}}</div>
// </div>
// `;

export const ilPizzaList = {
    controller: 'pizzaListCtrl',
    template: html
    // bindings:{
    //     pizzas: '<'
    // } 
};
App.component('ilPizzaList', ilPizzaList)


pizzaListCtrl.$inject = ["pizzaListService"]
function pizzaListCtrl(pizzaListService) {
    this.pizzas = [];
    getPizzas();

    function getPizzas() {
        pizzaListService.getPizzas()
            .then(c => this.pizzas = c.data);
    }
}
App.controller('pizzaListCtrl', pizzaListCtrl)

pizzaListService.$inject = ["$http"]
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


