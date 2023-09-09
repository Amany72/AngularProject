import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Home/home.component';

import { AboutComponent } from './About/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
{path : '',redirectTo:'home',pathMatch:'full'},
{path:'home', component:HomeComponent},

{path:'about', component:AboutComponent},
{path:'gallery', component:GalleryComponent},
{path : 'portfolio' , component:PortfolioComponent},
{path : 'contact' , component:ContactComponent},

{path:'**' , component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
