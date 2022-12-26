import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.prod';
import { SuperHero } from '../models/super-hero.ts';



@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  private url = "SuperHero"

  constructor(private http: HttpClient) { }

  // public getSuperHeroes() : SuperHero[] {
  //   let hero = new  SuperHero();
  //   hero.id = 1;
  //   hero.name = "Spider Man";
  //   hero.firstName = "Peter";
  //   hero.lastName = "Parker";
  //   hero.place = "NYC";

  //   return [hero];
  // }


  public getSuperHeroes() : Observable<SuperHero[]> {
    return this.http.get<SuperHero[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updateSuperHero(hero: SuperHero) : Observable<SuperHero[]> {
    return this.http.put<SuperHero[]>(
      `${environment.apiUrl}/${this.url}`, 
      hero);
  }

  public createSuperHero(hero: SuperHero) : Observable<SuperHero[]> {
    return this.http.post<SuperHero[]>(
      `${environment.apiUrl}/${this.url}`, 
      hero);
  }

  public deleteSuperHeroes(hero: SuperHero) : Observable<SuperHero[]> {
    return this.http.delete<SuperHero[]>(`${environment.apiUrl}/${this.url}/${hero.id}`);
  }
}
