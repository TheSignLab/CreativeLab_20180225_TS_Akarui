import { Component, OnInit , Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { MnFullpageOptions } from 'ngx-fullpage';
import { FullPageDataService } from './../../app.component.service';

@Component({
  selector: 'ec-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private index = 0;
  private nextIndex = 0;
  private direction = '';
  public me = this;

  @Output() public options: MnFullpageOptions = new MnFullpageOptions({
    navigation: true,
    keyboardScrolling: true,
    navigationPosition: 'left',
    anchors: ['Intro', 'Cover', 'Contact'],
    onLeave: (index: number, nextIndex: number, direction: string): void => {

      this.index = index;
      this.nextIndex = nextIndex;
      this.direction = direction;

      this.dataService.update(nextIndex);

    }
});

  constructor(public dataService: FullPageDataService) { }


  ngOnInit() {

  }

  public updateService(): void {

  }


  public getIndex(): number {
    return this.index;
  }
  public getNextIndex(): number {
    return this.nextIndex;
  }
  public getDirection(): string {
    return this.direction;
  }
  public onLoad(): void {

  }

  public debugger(): void {
    console.log('Oka');
  }


}
