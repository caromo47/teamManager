import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagePlayersComponent } from './manage-players/manage-players.component';
import { PlayersComponent } from './player-list/players.component';
import { PlayerNewComponent } from './player-new/player-new.component';
import { ManagePlayerRsvpComponent } from './manage-player-rsvp/manage-player-rsvp.component';


const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/players/list'},
    {path: 'players', pathMatch: 'full', redirectTo: '/players/list'},
    {path: 'players', pathMatch: 'prefix', component: ManagePlayersComponent,
    children: [
        {path: 'list', pathMatch: 'full', component: PlayersComponent},
        {path: 'addplayer', pathMatch: 'full', component: PlayerNewComponent}
    ]
    },
    {path: 'status', pathMatch: 'full', component: ManagePlayerRsvpComponent},
    {path: 'delete/:id', component: PlayersComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
