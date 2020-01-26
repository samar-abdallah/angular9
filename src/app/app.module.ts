import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule}  from '@angular/forms';
import { RouterModule} from '@angular/router';
import { BodyComponent } from './body/body.component';
import { SingleComponent } from './single/single.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { HeroDetailComponentComponent } from './hero-detail-component/hero-detail-component.component';
import { HeroesModule } from './heroes/heroes.module';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    BodyComponent,
    SingleComponent,
    CrisisListComponent,
    HeroListComponent,
    PageNotFoundComponentComponent,
    HeroDetailComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HeroesModule,
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
