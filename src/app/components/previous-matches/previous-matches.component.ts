import { Component, OnInit } from '@angular/core';
import { Matchs, Match } from 'src/app/Match';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-previous-matches',
  templateUrl: './previous-matches.component.html',
  styleUrls: ['./previous-matches.component.css']
})
export class PreviousMatchesComponent implements OnInit {

  matchs: Matchs;
  match : Match[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadMatchs();
  }

  loadMatchs():void{

    this.dataService.getMatch().subscribe(data => {
      this.matchs = data;
      this.match=this.matchs.matches;
      console.log(this.matchs);
    });
  }

}
