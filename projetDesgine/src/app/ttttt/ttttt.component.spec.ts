import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TttttComponent } from './ttttt.component';

describe('TttttComponent', () => {
  let component: TttttComponent;
  let fixture: ComponentFixture<TttttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TttttComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TttttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
