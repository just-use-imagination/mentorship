import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyMentorshipComponent } from './why-mentorship.component';

describe('WhyMentorshipComponent', () => {
  let component: WhyMentorshipComponent;
  let fixture: ComponentFixture<WhyMentorshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyMentorshipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyMentorshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
