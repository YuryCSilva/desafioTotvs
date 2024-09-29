import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map as mapRXJS } from "rxjs";
import { BaseClass, IBaseClassType } from "../../../shared/classes/base.class";
import { Pokemon, PokemonTypes } from "../../../shared/classes/pokemon.class";

@Injectable({
    providedIn: "root"
})
export class PokemonService {
    constructor(private http: HttpClient) {}

    getAllPokemons() {
        return this.http.get<AllPokemonsResponse>("https://pokeapi.co/api/v2/pokemon?limit=1025").pipe(
            mapRXJS(res => res.results.map(pokemon => new BaseClass(pokemon)))
        );
    }

    getPokemon(link: string) {
        return this.http.get<PokemonTypes>(link).pipe(
            mapRXJS(res => new Pokemon(res))
        );
    }
}

type AllPokemonsResponse = {
    count: number;
    next: string;
    previous: string;
    results: IBaseClassType[];
}