import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartExamScienceSubjectPageRoutingModule } from './start-exam-science-subject-routing.module';

import { StartExamScienceSubjectPage } from './start-exam-science-subject.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartExamScienceSubjectPageRoutingModule
  ],
  declarations: [StartExamScienceSubjectPage]
})
export class StartExamScienceSubjectPageModule {}
