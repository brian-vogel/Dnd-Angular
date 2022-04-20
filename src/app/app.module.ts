import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { StarterAppComponent } from './starter-app/starter-app.component';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DmComponent } from './dm/dm.component';
import { PlayerComponent } from './player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    StarterAppComponent,
    TopNavComponent,
    DashboardComponent,
    DmComponent,
    PlayerComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,

    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
