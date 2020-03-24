import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertproductoComponent } from './insertproducto.component';

describe('InsertproductoComponent', () => {
  let component: InsertproductoComponent;
  let fixture: ComponentFixture<InsertproductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertproductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
