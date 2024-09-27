import { Component } from '@angular/core';
import { PokemonSubjectService } from '../../../../services/Subjects/pokemon-subject.service';
import { SearchComponent } from '../../../../shared/components/search/search.component';

@Component({
  selector: 'app-container-search-pokemon',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './container-search-pokemon.component.html',
  styleUrl: './container-search-pokemon.component.scss'
})
export class ContainerSearchPokemonComponent {

  constructor(private PokemonSubjectService: PokemonSubjectService) { }
  onSearch(search: string): void {
    this.PokemonSubjectService.setState({ pokemonSearch: search })
  }
}
