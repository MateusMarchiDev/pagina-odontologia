import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClareamentoDentalComponent } from './clareamento-dental/clareamento-dental.component';
import { HomeComponent } from './home/home.component';
import { ImplanteDentarioComponent } from './implante-dentario/implante-dentario.component';
import { LentesContatoComponent } from './lentes-contato/lentes-contato.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'clareamento-dental', component: ClareamentoDentalComponent },
  { path: 'implante-dentario', component: ImplanteDentarioComponent },
  { path: 'lentes-contato', component: LentesContatoComponent },
  { path: 'quem-somos', component: QuemSomosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
