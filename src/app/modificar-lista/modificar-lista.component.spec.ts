import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarListaComponent } from './modificar-lista.component';

describe('ModificarListaComponent', () => {
  let component: ModificarListaComponent;
  let fixture: ComponentFixture<ModificarListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
