import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsEnglishQuestionPage } from './details-english-question.page';

describe('DetailsEnglishQuestionPage', () => {
  let component: DetailsEnglishQuestionPage;
  let fixture: ComponentFixture<DetailsEnglishQuestionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsEnglishQuestionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsEnglishQuestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
