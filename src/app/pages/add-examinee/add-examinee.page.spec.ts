import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddExamineePage } from './add-examinee.page';

describe('AddExamineePage', () => {
  let component: AddExamineePage;
  let fixture: ComponentFixture<AddExamineePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExamineePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddExamineePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
