import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentsAddComponent } from './students/students-add/students-add.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', component:HomeComponent, pathMatch: 'full'},
  {path: 'add', component: StudentsAddComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
