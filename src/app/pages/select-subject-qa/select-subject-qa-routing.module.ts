import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectSubjectQaPage } from './select-subject-qa.page';

const routes: Routes = [
  {
    path: '',
    component: SelectSubjectQaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectSubjectQaPageRoutingModule {}
