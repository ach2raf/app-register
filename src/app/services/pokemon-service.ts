import { inject, Service } from '@angular/core';
import { PokemonListResponse } from '../interfaces/pokemon-list-response';
import { Observable } from 'rxjs';
import { PokemonDetailResponse } from '../interfaces/pokemon-detail-response';
import { HttpClient } from '@angular/common/http';

@Service()
export class PokemonService {
     http = inject(HttpClient);

  getAll(): Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>('https://pokeapi.co/api/v2/pokemon/');
  }

  getOne(id: string): Observable<PokemonDetailResponse> {
    return this.http.get<PokemonDetailResponse>(`https://pokeapi.co/api/v2/pokemon/${id}`);
}
}
