import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChampionService } from '../champion.service';
import Champion from '../models/champion';

@Component({
  selector: 'app-champion-detail',
  templateUrl: './champion-detail.component.html',
  styleUrls: ['./champion-detail.component.css']
})
export class ChampionDetailComponent implements OnInit {

  constructor(private championService: ChampionService, private activatedRoute: ActivatedRoute) { }
  champion: Champion;
  championImage: string;

  ngOnInit(): void {
    const champId = this.activatedRoute.snapshot.paramMap.get('id');
    this.championService.getChampionById(champId)
    .subscribe(({data}) => {
      this.champion = data[champId];
    })
  }

  getChampImage(id: string): string {
    return this.championService.getChampionImageById(id);
  }

}
