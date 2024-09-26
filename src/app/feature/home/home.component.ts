import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../shared/classes/pokemon.class';
import { SearchComponent } from '../../shared/components/search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  pokemons!: Pokemon[];
  searchPokemons!: Pokemon[];
  constructor(private PokemonService: PokemonService) { }  

  ngOnInit(): void {
      this.PokemonService.getAllPokemons().subscribe({
        next: (res) => this.pokemons = res,
        error: (err) => console.log(err)
      })
  }

  onSearch(search: string): void {
    this.searchPokemons = this.pokemons.filter((p) => p.getName().includes(search));
  }
}
