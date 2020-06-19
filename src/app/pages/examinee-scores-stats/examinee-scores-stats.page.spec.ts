import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExamineeScoresStatsPage } from './examinee-scores-stats.page';

describe('ExamineeScoresStatsPage', () => {
  let component: ExamineeScoresStatsPage;
  let fixture: ComponentFixture<ExamineeScoresStatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamineeScoresStatsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExamineeScoresStatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
