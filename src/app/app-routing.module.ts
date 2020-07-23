import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteComponent } from './pages/site/site.component';


const routes: Routes = [
  {
    path: 'site',
    component: SiteComponent
  },
  {
    path: '**',
    redirectTo: 'site'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
