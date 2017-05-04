import App from '../module';

const html = `
<div layout="column" style="height:500px;" ng-cloak>
    <section layout="row" flex>

        <md-sidenav>
            <md-toolbar>
                <h1>Pizza Shop</h1>
            </md-toolbar>
            <md-content layout-padding>
                <il-menuitems></il-menuitems>
            </md-content>
        </md-sidenav>

        <md-content flex layout-padding>
            <il-container>json-server</il-container>
        </md-content>

    </section>
</div>
`;

function Component(){
    return{
        template: html
    };
}

App.component('il-app',Component);
