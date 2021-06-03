import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  constructor(private http: HttpClient) { }

  getAllChampions(): Observable<any> {
    return this.http.get<any>('https://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json');
  }

  getChampionById(id: string): Observable<any> {
    return this.http.get<any>(`https://ddragon.leagueoflegends.com/cdn/9.3.1/data/es_ES/champion/${id}.json`);
  }

  getChampionImageById(id: string): string {
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`
  }

}
