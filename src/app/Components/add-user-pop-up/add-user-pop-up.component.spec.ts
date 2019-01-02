import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserPopUpComponent } from './add-user-pop-up.component';

describe('AddUserPopUpComponent', () => {
  let component: AddUserPopUpComponent;
  let fixture: ComponentFixture<AddUserPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
