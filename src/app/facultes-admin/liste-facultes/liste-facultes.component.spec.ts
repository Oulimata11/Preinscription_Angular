import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFacultesComponent } from './liste-facultes.component';

describe('ListeFacultesComponent', () => {
  let component: ListeFacultesComponent;
  let fixture: ComponentFixture<ListeFacultesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeFacultesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeFacultesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
