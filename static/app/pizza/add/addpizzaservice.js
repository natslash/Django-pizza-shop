import { App } from '../../module';

export class AddPizzaService {
    constructor(http) {
        this.http = http;
    }
    savePizza(data) {
        return this.http.post(
            `http://localhost:3000/pizzas/`,
            data
        );
    }
    getIngridients(){
        return this.http.get(
            `http://localhost:3000/ingridients`
        );
    }
}

AddPizzaService.$inject = ['$http'];
App.service('addPizzaService', AddPizzaService);