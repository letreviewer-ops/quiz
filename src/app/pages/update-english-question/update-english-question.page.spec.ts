import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateEnglishQuestionPage } from './update-english-question.page';

describe('UpdateEnglishQuestionPage', () => {
  let component: UpdateEnglishQuestionPage;
  let fixture: ComponentFixture<UpdateEnglishQuestionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEnglishQuestionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateEnglishQuestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
