import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocialStudiesQuestionAnswerListPageRoutingModule } from './social-studies-question-answer-list-routing.module';

import { SocialStudiesQuestionAnswerListPage } from './social-studies-question-answer-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocialStudiesQuestionAnswerListPageRoutingModule
  ],
  declarations: [SocialStudiesQuestionAnswerListPage]
})
export class SocialStudiesQuestionAnswerListPageModule {}
