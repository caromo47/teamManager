import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PlayersService {

    constructor(private _http:Http) { }

    createPlayer(player){
    	console.log("Hit addNote function in services");
    	return this._http.post('/players/addplayer', player)
      .map(Response => Response.json())
      .toPromise();
    }

    getPlayers() {
        console.log('hit getPlayers function');
        return this._http.get('/players')
        .map(Response => Response.json())
        .toPromise();
    }

    deletePlayer(id) {
        console.log('Hit destroy function in service', id);
        return this._http.delete('players/delete/'+id)
        .map(Response => Response.json())
        .toPromise();
    }



}
