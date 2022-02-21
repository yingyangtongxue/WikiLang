import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrammarPageRoutingModule } from './grammar-routing.module';

import { GrammarPage } from './grammar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrammarPageRoutingModule
  ],
  declarations: [GrammarPage]
})
export class GrammarPageModule {}
