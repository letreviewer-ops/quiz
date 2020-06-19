import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartExamEnglishSubjectPage } from './start-exam-english-subject.page';

describe('StartExamEnglishSubjectPage', () => {
  let component: StartExamEnglishSubjectPage;
  let fixture: ComponentFixture<StartExamEnglishSubjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartExamEnglishSubjectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartExamEnglishSubjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
