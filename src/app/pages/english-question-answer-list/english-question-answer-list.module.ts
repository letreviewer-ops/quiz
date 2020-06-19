import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnglishQuestionAnswerListPageRoutingModule } from './english-question-answer-list-routing.module';

import { EnglishQuestionAnswerListPage } from './english-question-answer-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnglishQuestionAnswerListPageRoutingModule
  ],
  declarations: [EnglishQuestionAnswerListPage]
})
export class EnglishQuestionAnswerListPageModule {}
