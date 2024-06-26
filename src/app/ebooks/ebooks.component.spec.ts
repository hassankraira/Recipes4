import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbooksComponent } from './ebooks.component';

describe('EbooksComponent', () => {
  let component: EbooksComponent;
  let fixture: ComponentFixture<EbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EbooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
