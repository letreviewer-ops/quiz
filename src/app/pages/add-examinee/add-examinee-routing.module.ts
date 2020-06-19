import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddExamineePage } from './add-examinee.page';

const routes: Routes = [
  {
    path: '',
    component: AddExamineePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddExamineePageRoutingModule {}
