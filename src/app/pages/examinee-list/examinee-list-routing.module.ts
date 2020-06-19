import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamineeListPage } from './examinee-list.page';

const routes: Routes = [
  {
    path: '',
    component: ExamineeListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamineeListPageRoutingModule {}
