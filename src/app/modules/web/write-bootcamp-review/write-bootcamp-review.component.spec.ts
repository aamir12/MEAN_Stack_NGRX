import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteBootcampReviewComponent } from './write-bootcamp-review.component';

describe('WriteBootcampReviewComponent', () => {
  let component: WriteBootcampReviewComponent;
  let fixture: ComponentFixture<WriteBootcampReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteBootcampReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteBootcampReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
