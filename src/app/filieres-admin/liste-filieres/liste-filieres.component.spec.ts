import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFilieresComponent } from './liste-filieres.component';

describe('ListeFilieresComponent', () => {
  let component: ListeFilieresComponent;
  let fixture: ComponentFixture<ListeFilieresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeFilieresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeFilieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
