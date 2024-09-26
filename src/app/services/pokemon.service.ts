import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Pokemon } from "../shared/classes/pokemon.class";
import { map as mapRXJS } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class PokemonService {
    constructor(private http: HttpClient) {}

    getAllPokemons() {
        return this.http.get<AllPokemonsResponse>("https://pokeapi.co/api/v2/pokemon?limit=100000").pipe(
            mapRXJS(res => res.results.map(pokemon => new Pokemon(pokemon)))
        );
    }
}

type AllPokemonsResponse = {
    count: number;
    next: string;
    previous: string;
    results: Pokemon[];
}