import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilipinoQuestionAnswerListPage } from './filipino-question-answer-list.page';

describe('FilipinoQuestionAnswerListPage', () => {
  let component: FilipinoQuestionAnswerListPage;
  let fixture: ComponentFixture<FilipinoQuestionAnswerListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilipinoQuestionAnswerListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilipinoQuestionAnswerListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
