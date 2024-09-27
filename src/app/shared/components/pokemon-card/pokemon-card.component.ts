import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { Pokemon } from '../../classes/pokemon.class';
import { CommonModule } from '@angular/common';
import { PokemonSubjectService } from '../../../services/Subjects/pokemon-subject.service';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [NgbCollapseModule, CommonModule],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent {
  @ViewChild('card') card!: ElementRef;
  @Output() seeMoreDetailsEvent = new EventEmitter();
  @Input() pokemon!: Pokemon;
  isCollapsed = true;

  constructor(private PokemonSubjectService: PokemonSubjectService) { }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    if (!this.isCollapsed) setTimeout(() => this.card.nativeElement.scrollIntoView({ behavior: 'smooth' }), 100);
  }

  seeMoreDetailsIsClicked(): void {
    this.PokemonSubjectService.setState({ pokemonSelected: this.pokemon });
    this.seeMoreDetailsEvent.emit();
  }
}
