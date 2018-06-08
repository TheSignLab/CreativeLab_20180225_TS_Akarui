import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
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
  constructor(public dataService: FullPageDataService, private router: Router) { }

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

  }

  private closeMenu(): void {

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


  public goToRoute(inRoute): void {
    this.router.navigate(['/' + inRoute + '']);
    console.log(inRoute);
  }

}




