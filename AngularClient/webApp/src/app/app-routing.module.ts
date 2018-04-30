import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersListComponent } from './members/members-list/members-list.component';

const routes: Routes = [
  { path: "", redirectTo: "/members", pathMatch: "full" },
  {
    path: 'members', children: [
      { path: '', component: MembersListComponent },
      { path: 'list', component: MembersListComponent }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
