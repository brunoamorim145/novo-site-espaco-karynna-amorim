import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { LocalizacaoComponent } from './pages/localizacao/localizacao.component';
import { ContatosComponent } from './pages/contatos/contatos.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicosComponent,
    LocalizacaoComponent,
    ContatosComponent,
    SobreNosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
