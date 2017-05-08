import { App } from '../module';
import html from '../../templates/pizzashop/pizza.html';

export const ilPizza = {
    controller: 'pizzaCtrl',
    template: html
};
App.component('ilPizza', ilPizza)

PizzaCtrl.$inject = ['$state','pizzaService']
class PizzaCtrl {
    constructor(state, pizzaService) {
        this.state = state;
        this.pizzaService = pizzaService;
        this.name = null;
        this.img = null;
        this.ingridients = null;
        this.config(state);    
    }
    config(){
        let _this = this;
        let id = this.state.params && this.state.params.id;
        this.pizzaService.getPizza(id)
        .then(function(data){
            _this.name = data.name;
            _this.img = data.img;
            _this.ingridients = data.ingridients;
        });
    }
}
App.controller('pizzaCtrl', PizzaCtrl)

PizzaService.$inject = ['$http']
class PizzaService {
    constructor(http){
        this.http = http;
    }
    getPizza(id){
        return this.http.get(
            `http://localhost:3000/pizzas/${id}`
        );
    }
}
App.service('pizzaService', PizzaService);

