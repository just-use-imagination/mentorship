import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { WhyMentorshipComponent } from './components/why-mentorship/why-mentorship.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ContactComponent } from './components/contact/contact.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { TranslationService } from './services/translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { AnalyticsService } from './services/analytics.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    WhyMentorshipComponent,
    PricingComponent,
    ContactComponent,
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'IT Mentorship';

  constructor(
    private translationService: TranslationService,
    private analyticsService: AnalyticsService
  ) {}

  ngOnInit(): void {
    // Translation service is initialized in its constructor
    // Analytics service is initialized in its constructor
  }
}
