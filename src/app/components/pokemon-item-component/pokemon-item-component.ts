import { Component, input, output } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon-list-response';

@Component({
  imports: [],
  selector: 'app-pokemon-item-component',
  styleUrl: './pokemon-item-component.css',
  templateUrl: './pokemon-item-component.html',
})
export class PokemonItemComponent {
  pokemon = input<Pokemon>();
  pokemonClicked = output<string>();

  getPokemonId() {
    return this.pokemon()?.url.split('/')[6]!;
  }

  emitPokemonClicked() {
    this.pokemonClicked.emit(this.getPokemonId());
  }
}
