import { Injectable, EventEmitter , Output} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FullPageDataService {

  viewName = '';
  viewSection = 0;
  viewNextSection = 0;


  @Output() sectionUpdate: EventEmitter<number> = new EventEmitter();

  update(inSection) {
    this.viewSection = inSection;
    this.sectionUpdate.emit(this.viewSection);
  }

}
