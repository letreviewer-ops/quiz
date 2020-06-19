import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateExamineePage } from './update-examinee.page';

describe('UpdateExamineePage', () => {
  let component: UpdateExamineePage;
  let fixture: ComponentFixture<UpdateExamineePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateExamineePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateExamineePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
