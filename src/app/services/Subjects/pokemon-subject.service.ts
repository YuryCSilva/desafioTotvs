import { Injectable } from "@angular/core";
import { BaseClass } from "../../shared/classes/base.class";
import { Pokemon } from "../../shared/classes/pokemon.class";
import { SubjectService } from "./subject.service";

@Injectable({ 
    providedIn: 'root' 
})
export class PokemonSubjectService extends SubjectService<PokemonSubject> {

    constructor() {
        super();
    }
}

type PokemonSubject = {
    pokemonsList?: BaseClass[],
    pokemonSelected?: Pokemon,
};