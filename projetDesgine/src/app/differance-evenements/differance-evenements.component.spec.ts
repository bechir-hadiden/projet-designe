import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferanceEvenementsComponent } from './differance-evenements.component';

describe('DifferanceEvenementsComponent', () => {
  let component: DifferanceEvenementsComponent;
  let fixture: ComponentFixture<DifferanceEvenementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DifferanceEvenementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DifferanceEvenementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
