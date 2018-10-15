import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInventoryComponent } from './app-inventory.component';

describe('AppInventoryComponent', () => {
  let component: AppInventoryComponent;
  let fixture: ComponentFixture<AppInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
