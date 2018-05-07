import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Http } from '@angular/http';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContatoComponent } from './components/contato/contato.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import {InterceptorModule } from './interceptor.module';
import { ServicosService } from './services/servicos.service';
import { QuemSomosService } from './services/quemSomos.service';
import { MvvService } from './services/mvv.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    InterceptorModule,
  ],
  providers: [
    ServicosService,
    MvvService,
    QuemSomosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
