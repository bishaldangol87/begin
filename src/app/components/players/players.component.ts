import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Player, Squad } from 'src/app/player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  player: Player;
  squad: Squad[]=[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadPlayer();
  }

  loadPlayer(): void {
    this.dataService.getSquad().subscribe(data => {
      this.player = data;
      this.squad=this.player.squad;
      console.log(this.player);
    });

}

}
