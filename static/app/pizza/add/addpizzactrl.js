import { App } from '../../module';

export class AddPizzaCtrl {
    constructor(addPizzaService) {
        this.addPizzaService = addPizzaService;
        this.ingridients = null;
        this.pizza = {
            name: null,
            ingridients: [],
            image: null
        }; 
        this.getIngridients();
    }
    savePizza() {
        this.addPizzaService.savePizza(this.pizza);
    }
    getIngridients() {
        let _this = this;
        this.addPizzaService.getIngridients()
            .then(c => _this.ingridients = c.data);
    }
}
AddPizzaCtrl.$inject = ['addPizzaService'];
App.controller('addPizzaCtrl', AddPizzaCtrl);