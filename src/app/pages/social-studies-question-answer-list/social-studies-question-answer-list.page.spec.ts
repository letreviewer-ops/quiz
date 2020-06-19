import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SocialStudiesQuestionAnswerListPage } from './social-studies-question-answer-list.page';

describe('SocialStudiesQuestionAnswerListPage', () => {
  let component: SocialStudiesQuestionAnswerListPage;
  let fixture: ComponentFixture<SocialStudiesQuestionAnswerListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialStudiesQuestionAnswerListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SocialStudiesQuestionAnswerListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
