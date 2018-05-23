import { Component, OnInit } from '@angular/core';
import { FullPageDataService } from '../../../app.component.service';

@Component({
  selector: 'ec-lang-footer',
  templateUrl: './lang-footer.component.html',
  styleUrls: ['./lang-footer.component.css']
})
export class LangFooterComponent implements OnInit {
  public FooterIsDisplay = false;
  constructor(public dataService: FullPageDataService) { }

  ngOnInit() {
    this.dataService.sectionUpdate.subscribe(viewSection => {
      const StateString = 'home/' + viewSection;
      this.setState(StateString);
    });
  }

  public setState( inState ): void {

    if ( inState === 'home/1' ) {
      this.FooterIsDisplay = false;
    }
    if ( inState === 'home/2' ) {
      this.FooterIsDisplay = true;
    }
    if ( inState === 'home/3' ) {
      this.FooterIsDisplay = true;
    }

  }

}
