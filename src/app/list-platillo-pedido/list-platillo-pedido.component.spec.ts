import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlatilloPedidoComponent } from './list-platillo-pedido.component';

describe('ListPlatilloPedidoComponent', () => {
  let component: ListPlatilloPedidoComponent;
  let fixture: ComponentFixture<ListPlatilloPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPlatilloPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlatilloPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
