import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButomComponent } from './butom.component';

describe('ButomComponent', () => {
  let component: ButomComponent;
  let fixture: ComponentFixture<ButomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
