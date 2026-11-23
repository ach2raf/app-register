import { Component, inject, OnInit, signal } from '@angular/core';
import { PokemonService } from '../../services/pokemon-service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pokemon } from '../../interfaces/pokemon-list-response';
import { PokemonModal } from '../pokemon-modal/pokemon-modal';
import { PokemonItemComponent } from '../pokemon-item-component/pokemon-item-component';

@Component({
  imports: [PokemonItemComponent],
  selector: 'app-pokemon-list-component',
  styleUrl: './pokemon-list-component.css',
  templateUrl: './pokemon-list-component.html',
})
export class PokemonListComponent implements OnInit{
  pokemonService = inject(PokemonService);
  private modalService = inject(NgbModal);
  pokemonList = signal<Pokemon[]>([]);

  ngOnInit(): void {
    this.pokemonService.getAll().subscribe(resp => {
      this.pokemonList.set(resp.results);
    });
  }

  openPokemonModal(id: string) {
    this.pokemonService.getOne(id).subscribe(resp => {
      const modalRef = this.modalService.open(PokemonModal);
      modalRef.componentInstance.pokemonDetail = resp;
    });
  }
}
