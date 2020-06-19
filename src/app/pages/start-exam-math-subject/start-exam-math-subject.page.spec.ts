import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartExamMathSubjectPage } from './start-exam-math-subject.page';

describe('StartExamMathSubjectPage', () => {
  let component: StartExamMathSubjectPage;
  let fixture: ComponentFixture<StartExamMathSubjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartExamMathSubjectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartExamMathSubjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
