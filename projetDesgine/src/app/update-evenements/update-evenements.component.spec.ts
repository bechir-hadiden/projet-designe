import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEvenementsComponent } from './update-evenements.component';

describe('UpdateEvenementsComponent', () => {
  let component: UpdateEvenementsComponent;
  let fixture: ComponentFixture<UpdateEvenementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateEvenementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateEvenementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
