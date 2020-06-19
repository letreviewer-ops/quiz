import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScienceQuestionAnswerListPageRoutingModule } from './science-question-answer-list-routing.module';

import { ScienceQuestionAnswerListPage } from './science-question-answer-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScienceQuestionAnswerListPageRoutingModule
  ],
  declarations: [ScienceQuestionAnswerListPage]
})
export class ScienceQuestionAnswerListPageModule {}
