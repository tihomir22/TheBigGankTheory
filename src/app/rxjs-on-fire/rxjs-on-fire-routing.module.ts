import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TheBigGankComponent } from './comp/the-big-gank/the-big-gank.component';


const routes: Routes = [
  { path: '', component: TheBigGankComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsOnFireRoutingModule { }
