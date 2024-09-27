import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseClass } from '../../shared/classes/base.class';
import { SearchComponent } from '../../shared/components/search/search.component';
import { PokemonCardComponent } from '../../shared/components/pokemon-card/pokemon-card.component';
import { Pokemon } from '../../shared/classes/pokemon.class';
import { finalize, forkJoin } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/API/pokemon.service';
import { PokemonSubjectService } from '../../services/Subjects/pokemon-subject.service';
import { ModalPokemonComponent } from './components/modal-pokemon/modal-pokemon.component';
import { PageWithPaginationComponent } from '../../shared/components/page-with-pagination/page-with-pagination.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, PokemonCardComponent, ModalPokemonComponent, CommonModule, PageWithPaginationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  @ViewChild('modalPokemonDetails') modalPokemonDetails!: ModalPokemonComponent;
  pokemonsList!: BaseClass[];
  listPokemonsSearch: Pokemon[] = [];
  isSearched: boolean = false;
  page: number = 1;
  pageSize: number = 10;
  collectionSize: number = 0;

  constructor(private PokemonService: PokemonService, private PokemonSubjectService: PokemonSubjectService) { }

  ngOnInit(): void {
    this.getAllNamesPokemons();
  }

  getAllNamesPokemons(): void {
    this.PokemonService.getAllPokemons().subscribe({
      next: (res) => {
        this.pokemonsList = res
        this.PokemonSubjectService.setState({ pokemonsList: this.pokemonsList })
        this.collectionSize = this.pokemonsList.length
        this.searchPagination(this.page)
      },
      error: (err) => console.log(err)
    })
  }

  ngOnDestroy(): void {
    this.PokemonSubjectService.resetState();
  }
  
  onPageChange(event: any) {
    this.searchPagination(event);
  }

  onSearch(search: string): void {
    if (search === '') {
      this.collectionSize = this.pokemonsList.length;
      return this.searchPagination(this.page);
    }

    const pokemonsListUrlSearch = this.pokemonsList.filter((p) => p.getName().includes(search));
    this.collectionSize = pokemonsListUrlSearch.length;
    this.page = 1;

    if (pokemonsListUrlSearch.length === 0 && search !== '') {
      this.listPokemonsSearch = [];
      return;
    }

    this.searchPagination(this.page, pokemonsListUrlSearch);
  }

  searchPagination(page: number = 1, listBase: BaseClass[] = this.pokemonsList) {
    const pokemonsListUrlSearch = [];
    
    for (let i = (page - 1) * this.pageSize; i < page * this.pageSize && i < listBase.length; i++) {
      pokemonsListUrlSearch.push(this.PokemonService.getPokemon(listBase[i].getUrl()));
    }

    forkJoin(pokemonsListUrlSearch).pipe(
      finalize(() => {
        if (!this.isSearched) this.isSearched = true;
      })
    ).subscribe({
      next: (res) => this.listPokemonsSearch = res,
      error: (err) => console.log(err)
    })
  }

  seeMoreDetailsEvent(): void {
    this.modalPokemonDetails.open();
  }
}
