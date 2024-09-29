import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoResultsComponent } from './no-results.component';
import { provideRouter } from '@angular/router';
import { routes } from '../../../app.routes';

describe('NoResultsComponent', () => {
  let component: NoResultsComponent;
  let fixture: ComponentFixture<NoResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoResultsComponent],
      providers: [provideRouter(routes)]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
