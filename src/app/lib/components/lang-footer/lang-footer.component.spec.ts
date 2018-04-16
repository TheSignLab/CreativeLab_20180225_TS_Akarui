import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangFooterComponent } from './lang-footer.component';

describe('LangFooterComponent', () => {
  let component: LangFooterComponent;
  let fixture: ComponentFixture<LangFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
