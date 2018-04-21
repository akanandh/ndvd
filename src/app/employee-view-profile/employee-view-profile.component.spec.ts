import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeViewProfileComponent } from './employee-view-profile.component';

describe('EmployeeViewProfileComponent', () => {
  let component: EmployeeViewProfileComponent;
  let fixture: ComponentFixture<EmployeeViewProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeViewProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeViewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
