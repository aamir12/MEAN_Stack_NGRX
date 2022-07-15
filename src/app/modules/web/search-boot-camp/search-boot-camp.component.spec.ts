import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBootCampComponent } from './search-boot-camp.component';

describe('SearchBootCampComponent', () => {
  let component: SearchBootCampComponent;
  let fixture: ComponentFixture<SearchBootCampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBootCampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBootCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
