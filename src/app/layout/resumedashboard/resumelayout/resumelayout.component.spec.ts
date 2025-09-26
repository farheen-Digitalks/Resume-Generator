import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumelayoutComponent } from './resumelayout.component';

describe('ResumelayoutComponent', () => {
  let component: ResumelayoutComponent;
  let fixture: ComponentFixture<ResumelayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumelayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumelayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
