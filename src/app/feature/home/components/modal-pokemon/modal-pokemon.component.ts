import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';
import { Pokemon } from '../../../../shared/classes/pokemon.class';

import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PokemonSubjectService } from '../../../../services/Subjects/pokemon-subject.service';

@Component({
  selector: 'app-modal-pokemon',
  standalone: true,
  imports: [ModalComponent, CommonModule],
  templateUrl: './modal-pokemon.component.html',
  styleUrl: './modal-pokemon.component.scss'
})
export class ModalPokemonComponent {
  @ViewChild('modal') modal!: ModalComponent;
  pokemon!: Pokemon | undefined;
  subscription!: Subscription;

  constructor(private PokemonSubjectService: PokemonSubjectService) { 
    this.subscription = this.PokemonSubjectService.getState().subscribe(state => {
      if (!state.pokemonSelected) return;
      this.pokemon = state.pokemonSelected;
    });
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  open() {
    this.modal.open();
  }

  onClose() {
    this.PokemonSubjectService.setState({ pokemonSelected: null });
  }
}
