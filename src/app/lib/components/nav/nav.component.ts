import { Component, OnInit} from '@angular/core';
import { FullPageDataService } from '../../../app.component.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'ec-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public NavTitle = '';
  public NavTitleStyle = '';
  public NavLogoImg = require('../../../../assets/img/nav/default_logo.png');
  public urlJsonFile = require('assets/navSettings.json');

  private NavSettings: Object[];

 constructor(public dataService: FullPageDataService, private http: Http) { }

  ngOnInit() {

    this.dataService.sectionUpdate.subscribe(viewSection => {
      const StateString = 'home/' + viewSection;
      this.setState(StateString);
    });


    this.http.get('assets/navSettings.json').subscribe(res => {
      this.NavSettings = res.json();
      console.log(res.json());
    });

  }

  public setState( inState ): void {

    let setTitleString;

    if ( inState === 'home/1' ) {
      setTitleString = '';
    }
    if ( inState === 'home/2' ) {
      setTitleString = '<br>Esencia</br> Éclaire';
    }
    if ( inState === 'home/3' ) {
      setTitleString = 'Contacto';
    }

    this.setTitle( setTitleString );
  }

  private setTitle( inTitle ): void {
    this.NavTitle = inTitle ;
    console.log('NavTitle changed to : ' + inTitle + ' , Successfully.');
  }

}
