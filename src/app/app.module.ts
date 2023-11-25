import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './common/toolbar/toolbar.component';
import { LoginComponent } from './common/login/login.component';
import { MaterialUiModule } from './material-ui/material-ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContentPageComponent } from './main/content-page/content-page.component';
import { ContentPage2Component } from './main/content-page2/content-page2.component';
import { LandingPageComponent } from './common/landing-page/landing-page.component';
import { GamesComponent } from './main/games/games.component';
import { Game2Component } from './main/games/game2/game2.component';
import { Game3Component } from './main/games/game3/game3.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LoginComponent,
    ContentPageComponent,
    ContentPage2Component,
    LandingPageComponent,
    GamesComponent,
    Game2Component,
    Game3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialUiModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
