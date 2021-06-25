import { Component, OnInit, ViewChild } from '@angular/core';
import { ActorInfo } from 'src/app/model/actor-info';
import { AppServiceService } from 'src/app/service/app-service.service';
import { ActorInfoViewComponent } from '../actor-info-view/actor-info-view.component';

@Component({
  selector: 'app-actors-home',
  templateUrl: './actors-home.component.html',
  styleUrls: ['./actors-home.component.css']
})
export class ActorsHomeComponent implements OnInit {

  public actorsData: any;
  @ViewChild(ActorInfoViewComponent) actorInfoViewComponent: ActorInfoViewComponent;
  selectRowData?: ActorInfo;
  public rowId: number;

  constructor(private appService: AppServiceService) { }

  ngOnInit(): void {
    this.getActorsInformation();
  }


  public getActorsInformation() {
    this.appService.readActorJson().subscribe((data) => {
      this.actorsData = data;
    },
      (error) => {

      }
    )
  }

  public view(data: any) {
    const actor: ActorInfo = {
      id: data.id,
      name: data.name,
      country: data.country,
      rating: data.rating,
      contributionsMovie: data.contributionsMovie,
      age: data.age,
    }
    this.selectRowData = actor
  }

  public autoSelectRow(event: any) {
    this.rowId = event.id;
  }
}
