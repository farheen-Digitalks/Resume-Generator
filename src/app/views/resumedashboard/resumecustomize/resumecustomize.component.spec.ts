import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumecustomizeComponent } from './resumecustomize.component';

describe('ResumecustomizeComponent', () => {
  let component: ResumecustomizeComponent;
  let fixture: ComponentFixture<ResumecustomizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumecustomizeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumecustomizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
