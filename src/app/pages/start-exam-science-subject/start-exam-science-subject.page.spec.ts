import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartExamScienceSubjectPage } from './start-exam-science-subject.page';

describe('StartExamScienceSubjectPage', () => {
  let component: StartExamScienceSubjectPage;
  let fixture: ComponentFixture<StartExamScienceSubjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartExamScienceSubjectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartExamScienceSubjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
