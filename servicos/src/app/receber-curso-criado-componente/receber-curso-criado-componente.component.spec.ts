import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceberCursoCriadoComponenteComponent } from './receber-curso-criado-componente.component';

describe('ReceberCursoCriadoComponenteComponent', () => {
  let component: ReceberCursoCriadoComponenteComponent;
  let fixture: ComponentFixture<ReceberCursoCriadoComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceberCursoCriadoComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceberCursoCriadoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
