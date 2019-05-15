import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityTempComponent } from './city-temp.component';

describe('CityTempComponent', () => {
  let component: CityTempComponent;
  let fixture: ComponentFixture<CityTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
