import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilipinoQuestionAnswerListPageRoutingModule } from './filipino-question-answer-list-routing.module';

import { FilipinoQuestionAnswerListPage } from './filipino-question-answer-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilipinoQuestionAnswerListPageRoutingModule
  ],
  declarations: [FilipinoQuestionAnswerListPage]
})
export class FilipinoQuestionAnswerListPageModule {}
