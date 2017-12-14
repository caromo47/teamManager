import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';

import { PlayersService } from './players.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './player-list/players.component';
import { PlayerNewComponent } from './player-new/player-new.component';
import { ManagePlayersComponent } from './manage-players/manage-players.component';
import { ManagePlayerRsvpComponent } from './manage-player-rsvp/manage-player-rsvp.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    PlayerNewComponent,
    ManagePlayersComponent,
    ManagePlayerRsvpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
