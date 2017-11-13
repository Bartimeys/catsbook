import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent }   from './main-page/main-page.component';
import { CatsComponent }      from './cats/cats.component';
import { CatDetailsComponent }  from './cat-details/cat-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/main-page', pathMatch: 'full' },
  { path: 'main-page', component: MainPageComponent },
  { path: 'detail/:id', component: CatDetailsComponent },
  { path: 'cats', component: CatsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
