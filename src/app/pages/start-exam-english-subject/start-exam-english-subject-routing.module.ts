import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartExamEnglishSubjectPage } from './start-exam-english-subject.page';

const routes: Routes = [
  {
    path: '',
    component: StartExamEnglishSubjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartExamEnglishSubjectPageRoutingModule {}
