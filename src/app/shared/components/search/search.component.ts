import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Form } from '../../classes/form.class';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent extends Form {
  @Output() pokemonSearchEvent = new EventEmitter<string>();

  constructor(
    private fb: FormBuilder
  ) {
    super(fb);
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      pokemonPesquisa: new FormControl('', {
        validators: [Validators.required, Validators.minLength(1), Validators.maxLength(20)],
      })
    });

    this.form.get('pokemonPesquisa')?.valueChanges
      .pipe(distinctUntilChanged())
      .subscribe(res => {
        if (res === '') {
          this.pokemonSearchEvent.emit(res);
        }
      });
  }

  search(): void {
    this.isSendForm = true;

    if (!this.form.valid) {
      return;
    }

    this.pokemonSearchEvent.emit(this.form.value.pokemonPesquisa);
  }
}
