import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerRoutingModule } from './container-routing.module';
import { ActorsHomeComponent } from './actors-home/actors-home.component';
import { ActorInfoViewComponent } from './actor-info-view/actor-info-view.component';


@NgModule({
  declarations: [
    ActorsHomeComponent,
    ActorInfoViewComponent
  ],
  imports: [
    CommonModule,
    ContainerRoutingModule
  ]
})
export class ContainerModule { }
