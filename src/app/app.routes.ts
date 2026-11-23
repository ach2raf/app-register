import { Routes } from '@angular/router';
import { RegisterForm } from './components/register-form/register-form';
import { PokemonListComponent } from './components/pokemon-list-component/pokemon-list-component';

export const routes: Routes = [
    { path: 'register', component: RegisterForm},
    {path: 'pokemon-list',component: PokemonListComponent},
    {path: '',pathMatch: 'full',redirectTo:'/register'},
    {path: '**', redirectTo: '/register'}
];
