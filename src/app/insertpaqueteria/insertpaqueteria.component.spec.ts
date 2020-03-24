import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertpaqueteriaComponent } from './insertpaqueteria.component';

describe('InsertpaqueteriaComponent', () => {
  let component: InsertpaqueteriaComponent;
  let fixture: ComponentFixture<InsertpaqueteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertpaqueteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertpaqueteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
