import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartExamSocialStudiesSubjectPageRoutingModule } from './start-exam-social-studies-subject-routing.module';

import { StartExamSocialStudiesSubjectPage } from './start-exam-social-studies-subject.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartExamSocialStudiesSubjectPageRoutingModule
  ],
  declarations: [StartExamSocialStudiesSubjectPage]
})
export class StartExamSocialStudiesSubjectPageModule {}
