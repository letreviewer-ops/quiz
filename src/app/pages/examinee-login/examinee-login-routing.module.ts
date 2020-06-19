import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamineeLoginPage } from './examinee-login.page';

const routes: Routes = [
  {
    path: '',
    component: ExamineeLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamineeLoginPageRoutingModule {}
