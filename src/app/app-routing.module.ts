import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientProfileComponent} from "./client-profile/client-profile.component";
import {PersonComponent} from "./person/person.component";

const routes: Routes = [
  {path: 'client-profile',component: ClientProfileComponent},
  {path: 'person',component: PersonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
