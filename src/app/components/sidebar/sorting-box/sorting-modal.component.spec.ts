import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingBoxComponent } from './sorting-modal.component';

describe('SortingBoxComponent', () => {
  let component: SortingBoxComponent;
  let fixture: ComponentFixture<SortingBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SortingBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SortingBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
