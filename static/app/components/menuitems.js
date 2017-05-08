// import { App } from '../module';
// import html from '../../templates/pizzashop/pizzalist.html';

// export const ilPizzaList = {
//     controller: 'pizzaListCtrl',
//     template: html
// };
// App.component('ilPizzaList', ilPizzaList);

// pizzaListCtrl.$inject = ["pizzaListService"]
// function pizzaListCtrl(pizzaListService) {
//     let _this = this;
//     _this.pizzas = [];
//     getPizzas();

//     function getPizzas() {
//         pizzaListService.getPizzas()
//             .then(c => _this.pizzas = c.data);
//     }
// }
// App.controller('pizzaListCtrl', pizzaListCtrl);

// pizzaListService.$inject = ["$http"]
// function pizzaListService($http) {
//     return {
//         getPizzas: function () {
//             return $http.get(
//                 'http://localhost:3000/pizzas'
//             );
//         }
//     };
// }
// App.service('pizzaListService', pizzaListService);
