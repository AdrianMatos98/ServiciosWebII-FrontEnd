import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListCategoriaPedidoComponent } from './list-categoria-pedido.component';


describe('ListCategoriaPedidoComponent', () => {
  let component: ListCategoriaPedidoComponent;
  let fixture: ComponentFixture<ListCategoriaPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCategoriaPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCategoriaPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
