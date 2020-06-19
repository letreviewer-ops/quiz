import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartExamMathSubjectPage } from './start-exam-math-subject.page';

const routes: Routes = [
  {
    path: '',
    component: StartExamMathSubjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartExamMathSubjectPageRoutingModule {}
