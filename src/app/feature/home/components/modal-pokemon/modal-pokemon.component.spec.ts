import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPokemonComponent } from './modal-pokemon.component';
import { PokemonSubjectService } from '../../../../services/Subjects/pokemon-subject.service';

describe('ModalPokemonComponent', () => {
  let component: ModalPokemonComponent;
  let fixture: ComponentFixture<ModalPokemonComponent>;
  let service: PokemonSubjectService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalPokemonComponent],
      providers: [PokemonSubjectService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ModalPokemonComponent);
    service = TestBed.inject(PokemonSubjectService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open modal', () => {
    const spy = jest.spyOn(component, 'open');
    component.open();
    expect(spy).toHaveBeenCalled();
  });

  it('should open modal have subscription', () => {
    component.open();

    expect(component.subscription.closed).toBeFalsy();
  });

  it('should close modal', () => {
    const spy = jest.spyOn(component, 'onClose');
    component.onClose();
    expect(spy).toHaveBeenCalled();
  });

  it('should close modal setPokemonSelected to null', () => {
    component.onClose();

    expect(service.getValue().pokemonSelected).toBeNull();
  })

  it('should component be destroyed', () => {
    component.ngOnDestroy();

    expect(component.subscription.closed).toBeTruthy();
  })
});
