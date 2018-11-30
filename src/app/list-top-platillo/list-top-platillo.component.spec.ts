import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTopPlatilloComponent } from './list-top-platillo.component';

describe('ListTopPlatilloComponent', () => {
  let component: ListTopPlatilloComponent;
  let fixture: ComponentFixture<ListTopPlatilloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTopPlatilloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTopPlatilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
