import { Component, OnInit } from '@angular/core';
import { Match, Upmatch } from 'src/app/Matches';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  upmatch: Upmatch;
  match : Match[];
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.loadUpmatch();
  }

  loadUpmatch():void{

    this.data.getUpmatch().subscribe(data => {
      this.upmatch = data;
      this.match=this.upmatch.matches;
      console.log(this.upmatch);
    });
  }

}
