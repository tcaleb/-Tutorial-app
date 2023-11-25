import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './common/login/login.component';
import { ContentPageComponent } from './main/content-page/content-page.component';
import { authGuard } from './guards/auth.guard';
import { ContentPage2Component } from './main/content-page2/content-page2.component';
import { LandingPageComponent } from './common/landing-page/landing-page.component';
import { GamesComponent } from './main/games/games.component';

const routes: Routes = [
  {path:'', component: LandingPageComponent},
  {path:'login', component: LoginComponent},
  {path:'content', component: ContentPageComponent, canActivate:[authGuard]},
  {path:'adults', component: ContentPage2Component, canActivate:[authGuard]},
  {path:'games', component: GamesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
