import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentResponseComponent } from './content-response.component';

describe('ContentResponseComponent', () => {
  let component: ContentResponseComponent;
  let fixture: ComponentFixture<ContentResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
