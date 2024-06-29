import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes, Scroll } from '@angular/router';
import { ClareamentoDentalComponent } from './clareamento-dental/clareamento-dental.component';
import { HomeComponent } from './home/home.component';
import { ImplanteDentarioComponent } from './implante-dentario/implante-dentario.component';
import { LentesContatoComponent } from './lentes-contato/lentes-contato.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs';

const routes: Routes = [
  { path: '', component: HomeComponent },
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
export class AppRoutingModule {
  constructor(router: Router, viewportScroller: ViewportScroller) {
    router.events.pipe(
      filter(e => e instanceof Scroll)
    ).subscribe((e: any) => {
      if (e.position) {
        // Rola para a posição salva
        viewportScroller.scrollToPosition(e.position);
      } else if (e.anchor) {
        // Rola para o elemento âncora
        viewportScroller.scrollToAnchor(e.anchor);
      } else {
        // Rola para o topo
        viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }
 }
