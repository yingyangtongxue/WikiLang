import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChineseGrammarPageRoutingModule } from './chinese-grammar-routing.module';

import { ChineseGrammarPage } from './chinese-grammar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChineseGrammarPageRoutingModule
  ],
  declarations: [ChineseGrammarPage]
})
export class ChineseGrammarPageModule {}
