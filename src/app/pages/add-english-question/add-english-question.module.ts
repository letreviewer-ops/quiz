import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEnglishQuestionPageRoutingModule } from './add-english-question-routing.module';

import { AddEnglishQuestionPage } from './add-english-question.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEnglishQuestionPageRoutingModule
  ],
  declarations: [AddEnglishQuestionPage]
})
export class AddEnglishQuestionPageModule {}
