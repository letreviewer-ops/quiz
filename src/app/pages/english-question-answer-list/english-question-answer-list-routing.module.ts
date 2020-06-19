import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnglishQuestionAnswerListPage } from './english-question-answer-list.page';

const routes: Routes = [
  {
    path: '',
    component: EnglishQuestionAnswerListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnglishQuestionAnswerListPageRoutingModule {}
