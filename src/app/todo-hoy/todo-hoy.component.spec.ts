import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoHoyComponent } from './todo-hoy.component';

describe('TodoHoyComponent', () => {
  let component: TodoHoyComponent;
  let fixture: ComponentFixture<TodoHoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoHoyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoHoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
