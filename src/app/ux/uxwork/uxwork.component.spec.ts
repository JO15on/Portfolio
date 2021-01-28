import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxworkComponent } from './uxwork.component';

describe('UxworkComponent', () => {
  let component: UxworkComponent;
  let fixture: ComponentFixture<UxworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
