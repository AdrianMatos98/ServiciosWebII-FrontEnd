import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePlatilloPedidoComponent } from './detalle-platillo-pedido.component';

describe('DetallePlatilloPedidoComponent', () => {
  let component: DetallePlatilloPedidoComponent;
  let fixture: ComponentFixture<DetallePlatilloPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallePlatilloPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePlatilloPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
