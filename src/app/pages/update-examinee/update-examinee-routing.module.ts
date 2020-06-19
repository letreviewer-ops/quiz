import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateExamineePage } from './update-examinee.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateExamineePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateExamineePageRoutingModule {}
