import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MathQuestionAnswerListPage } from './math-question-answer-list.page';

describe('MathQuestionAnswerListPage', () => {
  let component: MathQuestionAnswerListPage;
  let fixture: ComponentFixture<MathQuestionAnswerListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathQuestionAnswerListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MathQuestionAnswerListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
