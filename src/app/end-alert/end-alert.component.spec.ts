import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndAlertComponent } from './end-alert.component';

describe('EndAlertComponent', () => {
  let component: EndAlertComponent;
  let fixture: ComponentFixture<EndAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
