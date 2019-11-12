import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { StoreModule } from '@ngrx/store';

import { listReducer } from './store/films/films.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { ListComponent } from './components/list/list.component';
import { ContentTextComponent } from './components/content-text/content-text.component';
import { SectionFilmsComponent } from './components/section-films/section-films.component';
import { FilmsComponent } from './containers/films/films.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    ListComponent,
    ContentTextComponent,
    SectionFilmsComponent,
    FilmsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    StoreModule.forRoot({ 
      films: listReducer 
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      `logo`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/image/svg/Logo.svg`)
    );
  }
 }
