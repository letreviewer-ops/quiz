import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectSubjectQaPageRoutingModule } from './select-subject-qa-routing.module';

import { SelectSubjectQaPage } from './select-subject-qa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectSubjectQaPageRoutingModule
  ],
  declarations: [SelectSubjectQaPage]
})
export class SelectSubjectQaPageModule {}
