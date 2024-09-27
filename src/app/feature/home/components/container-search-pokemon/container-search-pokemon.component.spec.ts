import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerSearchPokemonComponent } from './container-search-pokemon.component';

describe('ContainerSearchPokemonComponent', () => {
  let component: ContainerSearchPokemonComponent;
  let fixture: ComponentFixture<ContainerSearchPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerSearchPokemonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerSearchPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
