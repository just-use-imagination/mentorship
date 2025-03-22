import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-why-mentorship',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './why-mentorship.component.html',
  styleUrl: './why-mentorship.component.scss'
})
export class WhyMentorshipComponent {
  benefits = [
    {
      title: 'WHY_MENTORSHIP.BENEFITS.PERSONALIZED.TITLE',
      description: 'WHY_MENTORSHIP.BENEFITS.PERSONALIZED.DESCRIPTION',
      icon: 'route'
    },
    {
      title: 'WHY_MENTORSHIP.BENEFITS.REAL_WORLD.TITLE',
      description: 'WHY_MENTORSHIP.BENEFITS.REAL_WORLD.DESCRIPTION',
      icon: 'laptop-code'
    },
    {
      title: 'WHY_MENTORSHIP.BENEFITS.FEEDBACK.TITLE',
      description: 'WHY_MENTORSHIP.BENEFITS.FEEDBACK.DESCRIPTION',
      icon: 'comments'
    },
    {
      title: 'WHY_MENTORSHIP.BENEFITS.INSIGHTS.TITLE',
      description: 'WHY_MENTORSHIP.BENEFITS.INSIGHTS.DESCRIPTION',
      icon: 'lightbulb'
    },
    {
      title: 'WHY_MENTORSHIP.BENEFITS.ACCOUNTABILITY.TITLE',
      description: 'WHY_MENTORSHIP.BENEFITS.ACCOUNTABILITY.DESCRIPTION',
      icon: 'tasks'
    },
    {
      title: 'WHY_MENTORSHIP.BENEFITS.NETWORK.TITLE',
      description: 'WHY_MENTORSHIP.BENEFITS.NETWORK.DESCRIPTION',
      icon: 'network-wired'
    }
  ];
}
