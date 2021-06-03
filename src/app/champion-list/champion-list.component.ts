import { Component, OnInit } from '@angular/core';
import { ChampionService } from '../champion.service';
import Champion from '../models/champion';

@Component({
  selector: 'app-champion-list',
  templateUrl: './champion-list.component.html',
  styleUrls: ['./champion-list.component.css']
})
export class ChampionListComponent implements OnInit {

  constructor(private championService: ChampionService) { }

  champions: Champion[];

  ngOnInit(): void {
    this.championService.getAllChampions()
    .subscribe(({data}) => {
      this.champions = Object.values(data);
    })
  }

}
