import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClareamentoDentalComponent } from './clareamento-dental/clareamento-dental.component';
import { HomeComponent } from './home/home.component';
import { ImplanteDentarioComponent } from './implante-dentario/implante-dentario.component';
import { LentesContatoComponent } from './lentes-contato/lentes-contato.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';

@NgModule({
  declarations: [
    AppComponent,
    ClareamentoDentalComponent,
    HomeComponent,
    ImplanteDentarioComponent,
    LentesContatoComponent,
    QuemSomosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
