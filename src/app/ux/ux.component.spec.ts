import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UXComponent } from './ux.component';

describe('UXComponent', () => {
  let component: UXComponent;
  let fixture: ComponentFixture<UXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
