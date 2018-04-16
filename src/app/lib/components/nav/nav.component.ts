import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ec-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public NavTitle = 'Architecture + Studio';
  public NavLogoImg = require('../../../../assets/img/nav/default_logo.png');

  constructor() { }

  ngOnInit() {
  }

  public setState( inState ): void {

    let setTitleString;

    if ( inState === '' ) {
      setTitleString = '';
    }
    if ( inState === 'home/Esencia' ) {
      setTitleString = '<br>Esencia</br> Éclaire';
    }
    if ( inState === 'services/' ) {
      setTitleString = 'Nuestros Servicios';
    }

    this.setTitle( setTitleString );
  }

  private setTitle( inTitle ): void {
    this.NavTitle = inTitle ;
    console.log('NavTitle changed to : ' + inTitle + ' , Successfully.');
  }

}
