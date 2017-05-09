import { App } from '../../module';

const html = `<div layout="column" style="height:500px;" ng-cloak>
 
  <section layout="row" flex>

    <md-sidenav
        class="md-sidenav-left"
        md-component-id="left"
        md-is-locked-open="$mdMedia('gt-md')"
        md-whiteframe="4">

      <md-toolbar class="md-theme-indigo">
        <h1 class="md-toolbar-tools">Sidenav Left</h1>
      </md-toolbar>
      <md-content layout-padding>
        <md-button ng-click="close()" class="md-primary" hide-gt-md>
          Close Sidenav Left
        </md-button>
        <p hide show-gt-md>
          This sidenav is locked open on your device. To go back to the default behavior,
          narrow your display.
        </p>
      </md-content>

    </md-sidenav>

    <md-content flex layout-padding>

      <div layout="column" layout-align="top center">
        <p>
        The left sidenav will 'lock open' on a medium (>=960px wide) device.
        </p>
        <p>
        The right sidenav will focus on a specific child element.
        </p>

        <div>
          <md-button ng-click="toggleLeft()"
            class="md-primary" hide-gt-md>
            Toggle left
          </md-button>
        </div>

        <div>
          <md-button ng-click="toggleRight()"
            ng-hide="isOpenRight()"
            class="md-primary">
            Toggle right
          </md-button>
        </div>
      </div>

      <div flex></div>

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