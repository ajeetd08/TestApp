import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestareaComponent } from './testarea/testarea.component';
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'testarea', component: TestareaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
