import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExamineeMenuPage } from './examinee-menu.page';

describe('ExamineeMenuPage', () => {
  let component: ExamineeMenuPage;
  let fixture: ComponentFixture<ExamineeMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamineeMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExamineeMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
