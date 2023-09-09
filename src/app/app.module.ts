import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { NavComponent } from './Navbar/nav.component';
import { AboutComponent } from './About/about.component';

import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LapComponent } from './lap/lap.component';
import { MobileComponent } from './mobile/mobile.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AboutComponent,
    FooterComponent,
    NotFoundComponent,
    GalleryComponent,
    LapComponent,
    MobileComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
