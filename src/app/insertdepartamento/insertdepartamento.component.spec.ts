import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertdepartamentoComponent } from './insertdepartamento.component';

describe('InsertdepartamentoComponent', () => {
  let component: InsertdepartamentoComponent;
  let fixture: ComponentFixture<InsertdepartamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertdepartamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertdepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
