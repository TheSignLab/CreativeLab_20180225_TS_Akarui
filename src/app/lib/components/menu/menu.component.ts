import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ec-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  public MenuInstagramImgPath = require('../../../../assets/img/menu/icon_instagram.png');
  public MenuFacebookImgPath = require('../../../../assets/img/menu/icon_facebook.png');
  public MenuTwitterImgPath = require('../../../../assets/img/menu/icon_twitter.png');

  public menuState = 'closed';
  constructor() { }

  ngOnInit() {
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

}
