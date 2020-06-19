import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MathQuestionAnswerListPageRoutingModule } from './math-question-answer-list-routing.module';

import { MathQuestionAnswerListPage } from './math-question-answer-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MathQuestionAnswerListPageRoutingModule
  ],
  declarations: [MathQuestionAnswerListPage]
})
export class MathQuestionAnswerListPageModule {}
