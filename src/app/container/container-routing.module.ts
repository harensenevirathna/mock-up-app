import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorsHomeComponent } from './actors-home/actors-home.component';

const routes: Routes = [
  {
    path:'',
    component: ActorsHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule { }
