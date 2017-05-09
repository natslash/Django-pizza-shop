import { App } from '../../module';

export class PizzaService {
    constructor(http) {
        this.http = http;
    }
    getPizza(id) {
        return this.http.get(
            `http://localhost:3000/pizzas/${id}`
        );
    }
}

PizzaService.$inject = ['$http'];
App.service('pizzaService', PizzaService);