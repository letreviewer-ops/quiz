import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartExamSocialStudiesSubjectPage } from './start-exam-social-studies-subject.page';

describe('StartExamSocialStudiesSubjectPage', () => {
  let component: StartExamSocialStudiesSubjectPage;
  let fixture: ComponentFixture<StartExamSocialStudiesSubjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartExamSocialStudiesSubjectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartExamSocialStudiesSubjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
