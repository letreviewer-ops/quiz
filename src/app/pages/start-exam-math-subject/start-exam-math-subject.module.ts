import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartExamMathSubjectPageRoutingModule } from './start-exam-math-subject-routing.module';

import { StartExamMathSubjectPage } from './start-exam-math-subject.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartExamMathSubjectPageRoutingModule
  ],
  declarations: [StartExamMathSubjectPage]
})
export class StartExamMathSubjectPageModule {}
