import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEnglishQuestionPage } from './add-english-question.page';

const routes: Routes = [
  {
    path: '',
    component: AddEnglishQuestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEnglishQuestionPageRoutingModule {}
