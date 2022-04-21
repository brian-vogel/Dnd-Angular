import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from './action';

import { dmScreenData as data } from './data'

@Injectable({
  providedIn: 'root'
})
export class DmScreenService {
  getActions(): Observable<Action[]> {
    return of(data.actions);
  }
}
