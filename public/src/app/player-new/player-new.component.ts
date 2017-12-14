import { Component, OnInit } from '@angular/core';
import { PlayersService } from './../players.service';

@Component({
  selector: 'app-player-new',
  templateUrl: './player-new.component.html',
  styleUrls: ['./player-new.component.css']
})
export class PlayerNewComponent implements OnInit {
    players: object[] = []

    player = {
        name: "",
        position: ""
    }

  constructor(private _playersService: PlayersService) { }

  ngOnInit() {
  }

  onSubmit() {
      console.log('onSubmit', this.player);
      this._playersService.createPlayer(this.player)
      .then((data) => {
          console.log(data);
          this.players = data;
      })
  }

}
