import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxdetailComponent } from './uxdetail.component';

describe('UxdetailComponent', () => {
  let component: UxdetailComponent;
  let fixture: ComponentFixture<UxdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
