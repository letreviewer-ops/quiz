import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MathQuestionAnswerListPage } from './math-question-answer-list.page';

const routes: Routes = [
  {
    path: '',
    component: MathQuestionAnswerListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MathQuestionAnswerListPageRoutingModule {}
