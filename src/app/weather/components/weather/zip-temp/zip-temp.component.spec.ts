import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipTempComponent } from './zip-temp.component';

describe('ZipTempComponent', () => {
  let component: ZipTempComponent;
  let fixture: ComponentFixture<ZipTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
