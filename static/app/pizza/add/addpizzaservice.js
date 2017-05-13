import { App } from '../../module';

export class AddPizzaService {
    constructor(http) {
        this.http = http;
    }
    savePizza(data) {
        return this.http.post(
           '/api/v1/pizzas/',
            data
        );
    }
    getIngridients(){
        return this.http.get(
            '/api/v1/ingredients'
        );
    }
}

AddPizzaService.$inject = ['$http'];
App.service('addPizzaService', AddPizzaService);