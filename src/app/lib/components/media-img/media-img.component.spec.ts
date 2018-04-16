import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaImgComponent } from './media-img.component';

describe('MediaImgComponent', () => {
  let component: MediaImgComponent;
  let fixture: ComponentFixture<MediaImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
