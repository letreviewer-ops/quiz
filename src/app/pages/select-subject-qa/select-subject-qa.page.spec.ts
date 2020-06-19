import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectSubjectQaPage } from './select-subject-qa.page';

describe('SelectSubjectQaPage', () => {
  let component: SelectSubjectQaPage;
  let fixture: ComponentFixture<SelectSubjectQaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectSubjectQaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectSubjectQaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
