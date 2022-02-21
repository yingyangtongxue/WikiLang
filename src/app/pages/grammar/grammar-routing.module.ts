import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrammarPage } from './grammar.page';

const routes: Routes = [
  {
    path: '',
    component: GrammarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrammarPageRoutingModule {}
