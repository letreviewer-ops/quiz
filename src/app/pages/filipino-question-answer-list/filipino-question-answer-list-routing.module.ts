import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilipinoQuestionAnswerListPage } from './filipino-question-answer-list.page';

const routes: Routes = [
  {
    path: '',
    component: FilipinoQuestionAnswerListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilipinoQuestionAnswerListPageRoutingModule {}
