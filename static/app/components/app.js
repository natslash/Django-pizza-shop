import { App } from '../module';

const html = `
<div layout="column" style="height:500px;" ng-cloak>
    <section layout="row" flex>

        <md-sidenav class = "md-sidenav md-sidenav-left md-whiteframe-z2" md-whiteframe="4">
            
            <header class="nav-header">
                <img src="static/img/logo.png" alt>
                <h1 class="md-title">Pizza Shop</h1>
            </header>

            <md-content layout-padding>
                <il-menuitems></il-menuitems>
            </md-content>
        </md-sidenav>

    </section>
</div>
`;

export const ilApp ={
    template: html
}

App.component('ilApp',ilApp);