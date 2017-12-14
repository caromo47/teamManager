import { Component, OnInit } from '@angular/core';
import { PlayersService } from './../players.service';

@Component({
  selector: 'app-manage-player-rsvp',
  templateUrl: './manage-player-rsvp.component.html',
  styleUrls: ['./manage-player-rsvp.component.css']
})
export class ManagePlayerRsvpComponent implements OnInit {

  constructor(private _playersService: PlayersService) { }

  ngOnInit() {
  }

}
