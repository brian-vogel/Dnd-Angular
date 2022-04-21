import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StarterAppComponent } from './starter-app/starter-app.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { DmComponent } from './dm/dm.component';
import { PlayerComponent } from './player/player.component';
import { DmScreenComponent } from './dm-screen/dm-screen.component';

const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: 'dm', component: DmComponent },
  { path: 'dm-screen', component: DmScreenComponent },
  { path: 'player', component: PlayerComponent },
  { path: 'starter-app', component: StarterAppComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
