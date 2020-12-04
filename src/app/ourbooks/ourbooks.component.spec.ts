import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurbooksComponent } from './ourbooks.component';

describe('OurbooksComponent', () => {
  let component: OurbooksComponent;
  let fixture: ComponentFixture<OurbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurbooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
