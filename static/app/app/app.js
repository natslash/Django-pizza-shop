import { App } from '../module';

const html = `
    <div ng-cloak>
        <md content class="md-padding">
                
            <header>
                    <img src="static/img/logo.png" alt>
                    <h1 class="md-title md-heading">Pizza Shop</h1>
            </header>
            
            <md-nav-bar  md-selected-nav-item="currentNavItem">
                <md-nav-item class="md-button" ui-sref="pizzalist">
                    Show pizzas
                </md-nav-item>
                <md-nav-item class="md-button" ui-sref="addpizza">
                    Add pizza
                </md-nav-item>
                <md-nav-item class="md-button" ui-sref="login">
                    Login
                </md-nav-item>
                <md-nav-item class="md-button" ui-sref="pizzalist">
                    Register
                </md-nav-item>
            </md-nav-bar>
            
            <div class="ext-content" ui-view/>
        </md-content>
    </div>
`;

export const ilApp ={
    template: html
}
App.component('ilApp',ilApp);