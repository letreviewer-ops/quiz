import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsEnglishQuestionPage } from './details-english-question.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsEnglishQuestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsEnglishQuestionPageRoutingModule {}
