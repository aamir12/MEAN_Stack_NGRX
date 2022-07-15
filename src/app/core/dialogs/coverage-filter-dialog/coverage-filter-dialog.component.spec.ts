import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverageFilterDialogComponent } from './coverage-filter-dialog.component';

describe('CoverageFilterDialogComponent', () => {
  let component: CoverageFilterDialogComponent;
  let fixture: ComponentFixture<CoverageFilterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverageFilterDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverageFilterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
