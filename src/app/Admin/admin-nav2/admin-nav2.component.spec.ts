import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNav2Component } from './admin-nav2.component';

describe('AdminNav2Component', () => {
  let component: AdminNav2Component;
  let fixture: ComponentFixture<AdminNav2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNav2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNav2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
