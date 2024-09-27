import { Component, ViewChild } from '@angular/core';
import { ModalPokemonComponent } from '../modal-pokemon/modal-pokemon.component';
import { BaseClass } from '../../../../shared/classes/base.class';
import { Pokemon } from '../../../../shared/classes/pokemon.class';
import { PokemonService } from '../../../../services/API/pokemon.service';
import { PokemonSubjectService } from '../../../../services/Subjects/pokemon-subject.service';
import { finalize, forkJoin, Subscription } from 'rxjs';
import { PokemonCardComponent } from '../../../../shared/components/pokemon-card/pokemon-card.component';
import { CommonModule } from '@angular/common';
import { PageWithPaginationComponent } from '../../../../shared/components/page-with-pagination/page-with-pagination.component';

@Component({
  selector: 'app-container-list-pokemon',
  standalone: true,
  imports: [PokemonCardComponent, ModalPokemonComponent, CommonModule, PageWithPaginationComponent],
  templateUrl: './container-list-pokemon.component.html',
  styleUrl: './container-list-pokemon.component.scss'
})
export class ContainerListPokemonComponent {
  @ViewChild('modalPokemonDetails') modalPokemonDetails!: ModalPokemonComponent;
  pokemonsList!: BaseClass[];
  listPokemonsSearch: Pokemon[] = [];
  havePokemonSelected!: boolean;
  isSearched: boolean = false;
  page: number = 1;
  pageSize: number = 10;
  collectionSize: number = 0;
  subscription!: Subscription;
  search: string = '';

  constructor(private PokemonService: PokemonService, private PokemonSubjectService: PokemonSubjectService
  ) { 
    this.subscription = this.PokemonSubjectService.getState().subscribe(state => {
      if(state.pokemonsList) this.pokemonsList = state.pokemonsList;
      if(state.pokemonSelected != undefined) {
        setTimeout(() => this.modalPokemonDetails.open(), 1)
      }
      this.havePokemonSelected = state.pokemonSelected != undefined;
      if(state.pokemonSearch != undefined) this.onSearch(state.pokemonSearch);
    })
  }

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
    if (search === this.search) return;
    
    this.search = search;
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
}