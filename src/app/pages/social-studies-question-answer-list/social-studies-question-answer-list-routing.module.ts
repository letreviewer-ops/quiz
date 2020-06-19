import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialStudiesQuestionAnswerListPage } from './social-studies-question-answer-list.page';

const routes: Routes = [
  {
    path: '',
    component: SocialStudiesQuestionAnswerListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocialStudiesQuestionAnswerListPageRoutingModule {}
