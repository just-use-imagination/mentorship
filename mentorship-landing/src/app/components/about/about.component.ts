import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  skills = [
    { name: 'ABOUT.SKILLS.WEB', level: 95 },
    { name: 'ABOUT.SKILLS.SQL', level: 90 },
    { name: 'ABOUT.SKILLS.AUTOMATION', level: 85 },
    { name: 'ABOUT.SKILLS.MOBILE', level: 80 },
    { name: 'ABOUT.SKILLS.GENERAL', level: 95 }
  ];

  get sortedSkills() {
    return [...this.skills].sort((a, b) => b.level - a.level);
  }
}
