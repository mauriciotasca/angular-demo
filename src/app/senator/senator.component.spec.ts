/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SenatorComponent } from './senator.component';

describe('SenatorComponent', () => {
  let component: SenatorComponent;
  let fixture: ComponentFixture<SenatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
