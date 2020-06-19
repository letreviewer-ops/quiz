import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartExamScienceSubjectPage } from './start-exam-science-subject.page';

const routes: Routes = [
  {
    path: '',
    component: StartExamScienceSubjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartExamScienceSubjectPageRoutingModule {}
