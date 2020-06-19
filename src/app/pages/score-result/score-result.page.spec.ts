import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScoreResultPage } from './score-result.page';

describe('ScoreResultPage', () => {
  let component: ScoreResultPage;
  let fixture: ComponentFixture<ScoreResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreResultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScoreResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
