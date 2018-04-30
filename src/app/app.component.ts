import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ec-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Eclaire Architecture +  Studio';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');

  }
}
