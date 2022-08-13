import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalsearchComponent } from './personalsearch.component';

describe('PersonalsearchComponent', () => {
  let component: PersonalsearchComponent;
  let fixture: ComponentFixture<PersonalsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
