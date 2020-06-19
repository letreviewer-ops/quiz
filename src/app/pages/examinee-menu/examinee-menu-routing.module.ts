import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamineeMenuPage } from './examinee-menu.page';

const routes: Routes = [
  {
    path: '',
    component: ExamineeMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamineeMenuPageRoutingModule {}
