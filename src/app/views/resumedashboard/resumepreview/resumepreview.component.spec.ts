import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumepreviewComponent } from './resumepreview.component';

describe('ResumepreviewComponent', () => {
  let component: ResumepreviewComponent;
  let fixture: ComponentFixture<ResumepreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumepreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumepreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
