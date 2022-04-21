import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StarterAppComponent } from './starter-app/starter-app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DmComponent } from './dm/dm.component';
import { DmScreenComponent } from './dm-screen/dm-screen.component';
import { PlayerComponent } from './player/player.component';
import { TopNavComponent } from './top-nav/top-nav.component';

import { DmScreenService } from './dm-screen/dm-screen.service';

@NgModule({
  declarations: [
    AppComponent,
    StarterAppComponent,
    TopNavComponent,
    DashboardComponent,
    DmComponent,
    PlayerComponent,
    DmScreenComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,

    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatGridListModule,
    MatToolbarModule

  ],
  providers: [
    DmScreenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
