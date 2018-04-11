
import { Component } from "@angular/core";
import { MnFullpageOptions, MnFullpageService } from 'ngx-fullpage';

@Component({
  selector: "ec-root",
  template: `
  <ec-menu></ec-menu>
  <main>
    <ec-nav></ec-nav>
    <router-outlet></router-outlet>
    <ec-footer></ec-footer>  
    </main>
  `,
  styles: []
})
export class AppComponent {

  

}