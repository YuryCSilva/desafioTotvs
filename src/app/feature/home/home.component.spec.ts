import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { provideHttpClient } from '@angular/common/http';
import { ContainerSearchPokemonComponent } from './components/container-search-pokemon/container-search-pokemon.component';
import { ContainerListPokemonComponent } from './components/container-list-pokemon/container-list-pokemon.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, ContainerSearchPokemonComponent, ContainerListPokemonComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should import ContainerSearchPokemonComponent', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-container-search-pokemon')).toBeTruthy();
  })

  it('should import ContainerListPokemonComponent', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-container-list-pokemon')).toBeTruthy();
  })
});
