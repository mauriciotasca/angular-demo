/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SenatorHobbiesComponent } from './senator-hobbies.component';

describe('SenatorHobbiesComponent', () => {
  let component: SenatorHobbiesComponent;
  let fixture: ComponentFixture<SenatorHobbiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenatorHobbiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenatorHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
