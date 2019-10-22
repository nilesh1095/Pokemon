import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path:'',
    component:HomePageComponent
  },
  {
    path:'details/:pokemonName',
    component:DetailsPageComponent
  },
  {
    path:'errorPage',
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
