import { App } from '../../module';

export class PizzaService {
    constructor(http) {
        this.http = http;
    }
    getPizza(id) {
        return this.http.get(
            `http://localhost:8000/api/v1/pizzas/${id}`
        );
    }
    submitComment(data) {
        console.log(data);
        return this.http.post(
            //TODO hacer post de comentarios
            `http://localhost:3000/comments/`,
            data
        );
    }
}

PizzaService.$inject = ['$http'];
App.service('pizzaService', PizzaService);