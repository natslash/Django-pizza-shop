import { App } from '../../module';

export class PizzaCtrl {
    constructor(state, pizzaService) {
        this.state = state;
        this.pizzaService = pizzaService;
        this.name = null;
        this.img = null;
        this.ingridients = null;
        this.comments = null;
        this.config(state);
    }
    config() {
        let _this = this;
        let id = this.state.params && this.state.params.id;
        this.pizzaService.getPizza(id)
            .then(function (response) {
                let data = response.data;
                _this.name = data.name;
                _this.img = data.img;
                _this.ingridients = data.ingridients;
                _this.comments = data.comments;
            });
    }
    hasIngridients() {
        return this.ingridients && this.ingridients.length > 0;
    }
}
PizzaCtrl.$inject = ['$state', 'pizzaService'];
App.controller('pizzaCtrl', PizzaCtrl);