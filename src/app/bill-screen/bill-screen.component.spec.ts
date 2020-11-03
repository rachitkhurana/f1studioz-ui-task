import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillScreenComponent } from './bill-screen.component';

describe('BillScreenComponent', () => {
  let component: BillScreenComponent;
  let fixture: ComponentFixture<BillScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
