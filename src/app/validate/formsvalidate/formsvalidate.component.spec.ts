import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsvalidateComponent } from './formsvalidate.component';

describe('FormsvalidateComponent', () => {
  let component: FormsvalidateComponent;
  let fixture: ComponentFixture<FormsvalidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsvalidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsvalidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
