import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartExamEnglishSubjectPageRoutingModule } from './start-exam-english-subject-routing.module';

import { StartExamEnglishSubjectPage } from './start-exam-english-subject.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartExamEnglishSubjectPageRoutingModule
  ],
  declarations: [StartExamEnglishSubjectPage]
})
export class StartExamEnglishSubjectPageModule {}
