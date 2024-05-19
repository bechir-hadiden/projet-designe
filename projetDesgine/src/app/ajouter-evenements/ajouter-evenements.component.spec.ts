import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEvenementsComponent } from './ajouter-evenements.component';

describe('AjouterEvenementsComponent', () => {
  let component: AjouterEvenementsComponent;
  let fixture: ComponentFixture<AjouterEvenementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterEvenementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjouterEvenementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
