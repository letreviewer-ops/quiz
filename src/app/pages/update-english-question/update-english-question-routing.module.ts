import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateEnglishQuestionPage } from './update-english-question.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateEnglishQuestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateEnglishQuestionPageRoutingModule {}
