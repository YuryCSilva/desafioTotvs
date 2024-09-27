import { Component, OnInit } from '@angular/core';

import { ContainerListPokemonComponent } from './components/container-list-pokemon/container-list-pokemon.component';
import { ContainerSearchPokemonComponent } from './components/container-search-pokemon/container-search-pokemon.component';
import { PokemonSubjectService } from '../../services/Subjects/pokemon-subject.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContainerSearchPokemonComponent, ContainerListPokemonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private PokemonSubjectService: PokemonSubjectService) { }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.PokemonSubjectService.resetState();
  }
}
