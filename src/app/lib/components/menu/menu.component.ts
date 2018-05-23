import { Component, OnInit } from '@angular/core';
import { MnFullpageOptions } from 'ngx-fullpage';
import { FullPageDataService } from '../../../app.component.service';

@Component({
  selector: 'ec-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public MenuIsDisplay = false;

  public MenuInstagramImgPath = require('../../../../assets/img/menu/icon_instagram.png');
  public MenuFacebookImgPath = require('../../../../assets/img/menu/icon_facebook.png');
  public MenuTwitterImgPath = require('../../../../assets/img/menu/icon_twitter.png');

  public menuState = 'closed';
  constructor(public dataService: FullPageDataService) { }

  ngOnInit() {
    this.dataService.sectionUpdate.subscribe(viewSection => {
      const StateString = 'home/' + viewSection;
      this.setState(StateString);
    });
  }


  public toogleMenu(): void {
    if (this.menuState === 'closed') {
      this.openMenu();
      this.menuState = 'opened';
    } else {
      this.closeMenu();
      this.menuState = 'closed';
    }
  }

  private openMenu(): void {
    console.log('ngReport : The <menu> is showing up ... ');
  }

  private closeMenu(): void {
    console.log('ngReport : The <menu> is closing up ... ');

  }


  public setState( inState ): void {


    if ( inState === 'home/1' ) {
      this.MenuIsDisplay = false;
    }
    if ( inState === 'home/2' ) {
      this.MenuIsDisplay = true;
    }
    if ( inState === 'home/3' ) {
      this.MenuIsDisplay = true;
    }


  }

}
