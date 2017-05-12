import { App } from '../../module';

export class AddPizzaService {
    constructor(http, resolveUrl) {
        this.http = http;
        this.resolveUrl = resolveUrl;
    }
    savePizza(data) {
        return this.http.post(
           'http://localhost:8000/api/v1/pizzas/',
            data
        );
    }
    getIngridients(){
        return this.http.get(
            'http://localhost:8000/api/v1/ingredients'
        );
    }
}

AddPizzaService.$inject = ['$http', 'resolveUrl'];
App.service('addPizzaService', AddPizzaService);