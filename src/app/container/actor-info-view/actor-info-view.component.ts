import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActorInfo } from 'src/app/model/actor-info';


@Component({
  selector: 'app-actor-info-view',
  templateUrl: './actor-info-view.component.html',
  styleUrls: ['./actor-info-view.component.css']
})
export class ActorInfoViewComponent implements OnInit {

  @Input() selectRow: ActorInfo;
  @Output() actorInfoViewEvent = new EventEmitter<ActorInfo>()
  public actorInfo:any;

  constructor() { }

  ngOnInit(): void {
  }


  autoSelectTable(): void {
    this.actorInfoViewEvent.emit(this.selectRow);
  }

  viewActorInfo(){
    this.actorInfo = this.selectRow;
  }
}
