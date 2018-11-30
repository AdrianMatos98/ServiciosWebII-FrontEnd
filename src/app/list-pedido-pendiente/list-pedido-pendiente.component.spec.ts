import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPedidoPendienteComponent } from './list-pedido-pendiente.component';

describe('ListPedidoPendienteComponent', () => {
  let component: ListPedidoPendienteComponent;
  let fixture: ComponentFixture<ListPedidoPendienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPedidoPendienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPedidoPendienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
