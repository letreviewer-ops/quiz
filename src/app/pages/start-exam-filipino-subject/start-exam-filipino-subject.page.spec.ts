import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartExamFilipinoSubjectPage } from './start-exam-filipino-subject.page';

describe('StartExamFilipinoSubjectPage', () => {
  let component: StartExamFilipinoSubjectPage;
  let fixture: ComponentFixture<StartExamFilipinoSubjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartExamFilipinoSubjectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartExamFilipinoSubjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
