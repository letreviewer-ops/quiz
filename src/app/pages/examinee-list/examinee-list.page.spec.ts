import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExamineeListPage } from './examinee-list.page';

describe('ExamineeListPage', () => {
  let component: ExamineeListPage;
  let fixture: ComponentFixture<ExamineeListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamineeListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExamineeListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
