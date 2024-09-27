import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWithPaginationComponent } from './page-with-pagination.component';

describe('PageWithPaginationComponent', () => {
  let component: PageWithPaginationComponent;
  let fixture: ComponentFixture<PageWithPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageWithPaginationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageWithPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
