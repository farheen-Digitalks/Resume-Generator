import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumedashboardComponent } from './resumedashboard.component';

describe('ResumedashboardComponent', () => {
  let component: ResumedashboardComponent;
  let fixture: ComponentFixture<ResumedashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumedashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
