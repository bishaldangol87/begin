import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Table, Rank } from 'src/app/standing';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {

  rank: Rank;
  table: Table[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadRank();
  }

  loadRank(): void {
    this.dataService.getRank().subscribe(data => {
      this.rank = data;
      this.table = this.rank.standings[0].table;
      console.log(this.table);
    });


}

}
