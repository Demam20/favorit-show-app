import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentShowComponent } from './current-show.component';
import { ShowService } from '../show.service';
import * as testing from '@angular/common/http/testing';
import { ShowFakeService } from '../show-fake.service';
describe('CurrentShowComponent', () => {
  let component: CurrentShowComponent;
  let fixture: ComponentFixture<CurrentShowComponent>;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
      imports: [testing.HttpClientTestingModule],
      declarations: [ CurrentShowComponent ],
      providers: [{provide: ShowService, useClass:ShowFakeService}]
    })

  }));  
  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});          

       