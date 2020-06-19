import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScienceQuestionAnswerListPage } from './science-question-answer-list.page';

const routes: Routes = [
  {
    path: '',
    component: ScienceQuestionAnswerListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScienceQuestionAnswerListPageRoutingModule {}
