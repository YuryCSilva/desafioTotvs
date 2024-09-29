import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerListPokemonComponent } from './container-list-pokemon.component';
import { provideHttpClient } from '@angular/common/http';

describe('ContainerListPokemonComponent', () => {
  let component: ContainerListPokemonComponent;
  let fixture: ComponentFixture<ContainerListPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerListPokemonComponent],
      providers: [provideHttpClient()]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ContainerListPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
