import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrammarPage } from './grammar.page';

const routes: Routes = [
  {
    path: '',
    component: GrammarPage
  },
  {
    path: 'chinese-grammar',
    loadChildren: () => import('./chinese-grammar/chinese-grammar.module').then( m => m.ChineseGrammarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrammarPageRoutingModule {}
