import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalupdateComponent } from './personalupdate.component';

describe('PersonalupdateComponent', () => {
  let component: PersonalupdateComponent;
  let fixture: ComponentFixture<PersonalupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
