import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from '../app/components/todos/todos.component';
import { AboutComponent } from '../app/components/pages/about/about.component'
 
const routes: Routes = [
  {path:'',component:TodosComponent,pathMatch:'full'},
  {path:'about',component:AboutComponent},
  {path:'todos',component:TodosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
