import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DifferentMeaningsPage } from './different-meanings.page';

const routes: Routes = [
  {
    path: '',
    component: DifferentMeaningsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DifferentMeaningsPageRoutingModule {}
