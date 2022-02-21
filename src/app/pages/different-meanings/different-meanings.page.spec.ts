import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DifferentMeaningsPage } from './different-meanings.page';

describe('DifferentMeaningsPage', () => {
  let component: DifferentMeaningsPage;
  let fixture: ComponentFixture<DifferentMeaningsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DifferentMeaningsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DifferentMeaningsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
