import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from './action';
import { DmScreenService } from './dm-screen.service';

@Component({
  selector: 'app-dm-screen',
  templateUrl: './dm-screen.component.html',
  styleUrls: ['./dm-screen.component.scss'],
  providers: [ DmScreenService ]
})
export class DmScreenComponent implements OnInit {
  public actions: Observable<Action[]> = of([]);

  constructor(private service: DmScreenService) {}

  ngOnInit(): void {
    this.actions = this.service.getActions();
  }

}
