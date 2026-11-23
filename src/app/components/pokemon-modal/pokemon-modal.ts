import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PokemonDetailResponse } from '../../interfaces/pokemon-detail-response';

@Component({
  imports: [],
  selector: 'app-pokemon-modal',
  styleUrl: './pokemon-modal.css',
  templateUrl: './pokemon-modal.html',
})
export class PokemonModal {
  activeModal = inject(NgbActiveModal);
  @Input() pokemonDetail: PokemonDetailResponse | undefined;
}
