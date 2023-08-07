import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { CikkekComponent } from './menu/cikkek/cikkek.component';
import { CsaladfaComponent } from './menu/csaladfa/csaladfa.component';
import { GyerekComponent } from './menu/gyerek/gyerek.component';
import { PalyaComponent } from './menu/palya/palya.component';
import { KepekComponent } from './menu/kepek/kepek.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    PageNotFoundComponent,
    ContactComponent,
    CikkekComponent,
    CsaladfaComponent,
    GyerekComponent,
    PalyaComponent,
    KepekComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(router: Router) {}
 }
