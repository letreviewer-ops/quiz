import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnglishQuestionAnswerListPage } from './english-question-answer-list.page';

describe('EnglishQuestionAnswerListPage', () => {
  let component: EnglishQuestionAnswerListPage;
  let fixture: ComponentFixture<EnglishQuestionAnswerListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnglishQuestionAnswerListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnglishQuestionAnswerListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
