import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartExamFilipinoSubjectPage } from './start-exam-filipino-subject.page';

const routes: Routes = [
  {
    path: '',
    component: StartExamFilipinoSubjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartExamFilipinoSubjectPageRoutingModule {}
