import { App } from '../module';

const html = `
    <md-sidenav class="site-sidenav md-sidenav-left md-whiteframe-z2 hide-print md-closed ng-isolate-scope _md md-locked-open"> 
        
        <header class="nav-header">
            <a class="pizza-logo">
                <img src="static/img/logo.png" alt>
                <h1 class="md-title md-heading ng-isolated-scope">Pizza Shop</h1>
            </a>
        </header>
          
        <md-content layout-padding>
          
            <a class="md-button" ui-sref="pizzalist">
                <div>Show Pizzas</div>
            </a>

            <il-menuitems></il-menuitems>
        </md-content>

    </md-sidenav>
`;

export const ilApp ={
    template: html
}
App.component('ilApp',ilApp);
