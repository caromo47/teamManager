import { Component, OnInit } from '@angular/core';
import { PlayersService } from './../players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players = [];

  constructor(private _playersService:PlayersService) { }
  deleteid: string;



  ngOnInit() {
      this.getPlayers();
    }

    getPlayers(){
        this._playersService.getPlayers()
        .then((players)=>{
            console.log(players);
            this.players = players;
            // this.updateplayers();
        })
        .catch((err)=>console.log(err));
    }

    destroy(id) {
        console.log('delete!', id);
        this.deleteid = id;
        this._playersService.deletePlayer(this.deleteid)
        .then((data) => {
            console.log('then', data);
            this.getPlayers();
        })

    }


}
