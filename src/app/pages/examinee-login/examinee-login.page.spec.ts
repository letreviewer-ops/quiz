import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExamineeLoginPage } from './examinee-login.page';

describe('ExamineeLoginPage', () => {
  let component: ExamineeLoginPage;
  let fixture: ComponentFixture<ExamineeLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamineeLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExamineeLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
