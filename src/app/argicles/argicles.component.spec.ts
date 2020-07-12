import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgiclesComponent } from './argicles.component';

describe('ArgiclesComponent', () => {
  let component: ArgiclesComponent;
  let fixture: ComponentFixture<ArgiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArgiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArgiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
