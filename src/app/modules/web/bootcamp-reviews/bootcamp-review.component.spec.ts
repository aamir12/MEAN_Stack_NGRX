import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootcampReveiewsComponent } from './bootcamp-reviews.component';

describe('BootcampReveiewsComponent', () => {
  let component: BootcampReveiewsComponent;
  let fixture: ComponentFixture<BootcampReveiewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootcampReveiewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootcampReveiewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
