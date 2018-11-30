import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPedidoCompletoComponent } from './list-pedido-completo.component';

describe('ListPedidoCompletoComponent', () => {
  let component: ListPedidoCompletoComponent;
  let fixture: ComponentFixture<ListPedidoCompletoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPedidoCompletoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPedidoCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
