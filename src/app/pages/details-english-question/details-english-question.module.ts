import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsEnglishQuestionPageRoutingModule } from './details-english-question-routing.module';

import { DetailsEnglishQuestionPage } from './details-english-question.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsEnglishQuestionPageRoutingModule
  ],
  declarations: [DetailsEnglishQuestionPage]
})
export class DetailsEnglishQuestionPageModule {}
