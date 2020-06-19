import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddEnglishQuestionPage } from './add-english-question.page';

describe('AddEnglishQuestionPage', () => {
  let component: AddEnglishQuestionPage;
  let fixture: ComponentFixture<AddEnglishQuestionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEnglishQuestionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddEnglishQuestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
