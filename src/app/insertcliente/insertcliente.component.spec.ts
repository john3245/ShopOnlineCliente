import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertclienteComponent } from './insertcliente.component';

describe('InsertclienteComponent', () => {
  let component: InsertclienteComponent;
  let fixture: ComponentFixture<InsertclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
