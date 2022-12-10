import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyudentsComponent } from './syudents.component';

describe('SyudentsComponent', () => {
  let component: SyudentsComponent;
  let fixture: ComponentFixture<SyudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
