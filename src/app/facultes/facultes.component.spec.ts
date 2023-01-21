import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultesComponent } from './facultes.component';

describe('FacultesComponent', () => {
  let component: FacultesComponent;
  let fixture: ComponentFixture<FacultesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
