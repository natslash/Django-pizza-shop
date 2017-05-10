import { App } from '../../module';

export class AddPizzaService {
    constructor(http, resolveUrl) {
        this.http = http;
        this.resolveUrl = resolveUrl;
    }
    savePizza(data) {
        return this.http.post(
            this.resolveUrl.resolve('pizzas'),
            data
        );
    }
    getIngridients(){
        return this.http.get(
            this.resolveUrl.resolve('ingridients'),
        );
    }
}

AddPizzaService.$inject = ['$http', 'resolveUrl'];
App.service('addPizzaService', AddPizzaService);