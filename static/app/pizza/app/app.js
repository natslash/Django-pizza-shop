import { App } from '../../module';

const html = 
`<div layout="column" ng-cloak>
  <section layout="row" flex>

    <md-sidenav
        class="md-sidenav-left"
        md-component-id="left"
        md-is-locked-open="$mdMedia('gt-md')"
        md-whiteframe="4">

      <md-toolbar class="md-theme-indigo">
        <img src="static/img/logo.png" alt>
        <h1 class="md-toolbar-tools">Pizza Shop</h1>
      </md-toolbar>

      <md-content layout="column" layout-padding>
        <md-button class="md-primary" ui-sref="pizzalist">
          show pizzas
        </md-button>
        <md-button class="md-primary" ui-sref="addpizza">
          Add pizza
        </md-button>
      </md-content>

    </md-sidenav>

    <md-content flex layout-padding>
      <div ui-view flex></div>
    </md-content>

  </section>
</div>`

export const ilApp ={
    template: html
}
App.component('ilApp',ilApp);

/*
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
 */