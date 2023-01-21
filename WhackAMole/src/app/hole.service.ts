//A service is a re-usable TypeScript class that can
//be used in components across the Angular application.

//This class provides data for components

import { Injectable } from '@angular/core';

//Hur ska jag använda den här typen
import { Mole } from './MoleInTheHole';
import { moleHoleState } from './speldata';

@Injectable({
  providedIn: 'root',
})
export class HoleService {
  constructor() {}

  //moleHoles kan du sedan ge till ditt playfield som renderar en "hole" component för var objekt?.
  //Lägg speldata i samma objekt *ngFor

  //Hur ska jag göra ett nytt object av det här i min speldata.ts?
  //det här e ju en lista med objekt
  moleHoless = [
    //Rad 1
    { id: 1, available: true },
    { id: 2, available: true },
    { id: 3, available: true },
    { id: 4, available: true },
    { id: 5, available: true },
    //Rad 2
    { id: 6, available: true },
    { id: 7, available: true },
    { id: 8, available: true },
    { id: 9, available: true },
    { id: 10, available: true },
    //Rad 3
    { id: 11, available: true },
    { id: 12, available: true },
    { id: 13, available: true },
    { id: 14, available: true },
    { id: 15, available: true },
    //Rad 4
    { id: 16, available: true },
    { id: 17, available: true },
    { id: 18, available: true },
    { id: 19, available: true },
    { id: 20, available: true },
    //Rad 5
    { id: 21, available: true },
    { id: 22, available: true },
    { id: 23, available: true },
    { id: 24, available: true },
    { id: 25, available: true },
  ];

  generateMole() {
    //const i = Math.floor(Math.random() * this.moleHoles.length);
    //const available
    //const äh = this.moleHoles[i];
  }
}
