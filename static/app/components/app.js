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
            <il-menuitems></il-menuitems>
        </md-content>

    </md-sidenav>
    
     <div layout="column" tabindex="-1" role="main" flex class="layout-column flex">
        <md-toolbar class="md-whiteframe-glow-z1 site-content-toolbar _md _md-toolbar-transitions">
            
        </md-toolbar>
        <md-content md-scroll-y="" layout="column" flex class="_md layout-column flex">
            
        </md-content>
    </div>
     
`;

export const ilApp ={
    template: html
}
App.component('ilApp',ilApp);
