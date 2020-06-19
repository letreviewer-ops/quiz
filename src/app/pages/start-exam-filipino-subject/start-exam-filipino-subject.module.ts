import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartExamFilipinoSubjectPageRoutingModule } from './start-exam-filipino-subject-routing.module';

import { StartExamFilipinoSubjectPage } from './start-exam-filipino-subject.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartExamFilipinoSubjectPageRoutingModule
  ],
  declarations: [StartExamFilipinoSubjectPage]
})
export class StartExamFilipinoSubjectPageModule {}
