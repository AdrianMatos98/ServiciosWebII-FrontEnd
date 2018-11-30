import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlatilloComponent } from './list-platillo.component';

describe('ListPlatilloComponent', () => {
  let component: ListPlatilloComponent;
  let fixture: ComponentFixture<ListPlatilloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPlatilloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlatilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
