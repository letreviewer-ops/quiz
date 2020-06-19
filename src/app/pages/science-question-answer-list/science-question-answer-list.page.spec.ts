import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScienceQuestionAnswerListPage } from './science-question-answer-list.page';

describe('ScienceQuestionAnswerListPage', () => {
  let component: ScienceQuestionAnswerListPage;
  let fixture: ComponentFixture<ScienceQuestionAnswerListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScienceQuestionAnswerListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScienceQuestionAnswerListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
