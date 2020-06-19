import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateEnglishQuestionPageRoutingModule } from './update-english-question-routing.module';

import { UpdateEnglishQuestionPage } from './update-english-question.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateEnglishQuestionPageRoutingModule
  ],
  declarations: [UpdateEnglishQuestionPage]
})
export class UpdateEnglishQuestionPageModule {}
