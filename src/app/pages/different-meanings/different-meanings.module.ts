import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DifferentMeaningsPageRoutingModule } from './different-meanings-routing.module';

import { DifferentMeaningsPage } from './different-meanings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DifferentMeaningsPageRoutingModule
  ],
  declarations: [DifferentMeaningsPage]
})
export class DifferentMeaningsPageModule {}
