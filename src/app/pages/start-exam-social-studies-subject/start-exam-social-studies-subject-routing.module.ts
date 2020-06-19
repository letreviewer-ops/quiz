import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartExamSocialStudiesSubjectPage } from './start-exam-social-studies-subject.page';

const routes: Routes = [
  {
    path: '',
    component: StartExamSocialStudiesSubjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartExamSocialStudiesSubjectPageRoutingModule {}
