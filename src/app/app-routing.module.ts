import { ListUsersComponent } from './components/arcTutorials/list-users/list-users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterUsersComponent } from './components/arcTutorials/filter-users/filter-users.component';

const routes: Routes = [
  {
    path:'filterUsers',component:FilterUsersComponent
  },
  {
    path:'listUsers',component:ListUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
