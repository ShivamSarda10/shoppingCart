import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCartComponent } from './add-edit-cart.component';

describe('AddEditCartComponent', () => {
  let component: AddEditCartComponent;
  let fixture: ComponentFixture<AddEditCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
