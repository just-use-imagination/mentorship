import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  plans = [
    {
      title: 'PRICING.PLANS.BASIC.TITLE',
      price: 'PRICING.PLANS.BASIC.PRICE',
      period: 'PRICING.PLANS.BASIC.PERIOD',
      features: [
        'PRICING.PLANS.BASIC.FEATURES.0',
        'PRICING.PLANS.BASIC.FEATURES.1',
        'PRICING.PLANS.BASIC.FEATURES.2',
        'PRICING.PLANS.BASIC.FEATURES.3',
        'PRICING.PLANS.BASIC.FEATURES.4'
      ],
      cta: 'PRICING.PLANS.BASIC.CTA'
    },
    {
      title: 'PRICING.PLANS.STANDARD.TITLE',
      price: 'PRICING.PLANS.STANDARD.PRICE',
      period: 'PRICING.PLANS.STANDARD.PERIOD',
      features: [
        'PRICING.PLANS.STANDARD.FEATURES.0',
        'PRICING.PLANS.STANDARD.FEATURES.1',
        'PRICING.PLANS.STANDARD.FEATURES.2',
        'PRICING.PLANS.STANDARD.FEATURES.3',
        'PRICING.PLANS.STANDARD.FEATURES.4'
      ],
      cta: 'PRICING.PLANS.STANDARD.CTA'
    },
    {
      title: 'PRICING.PLANS.PREMIUM.TITLE',
      price: null,
      period: 'PRICING.PLANS.PREMIUM.PERIOD',
      features: [
        'PRICING.PLANS.PREMIUM.FEATURES.0',
        'PRICING.PLANS.PREMIUM.FEATURES.1',
        'PRICING.PLANS.PREMIUM.FEATURES.2',
        'PRICING.PLANS.PREMIUM.FEATURES.3',
        'PRICING.PLANS.PREMIUM.FEATURES.4'
      ],
      cta: 'PRICING.PLANS.PREMIUM.CTA'
    }
  ];

  constructor(
    private analyticsService: AnalyticsService,
    private translateService: TranslateService
  ) {}

  /**
   * Track plan selection
   * @param planTitle The title key of the selected plan
   */
  trackPlanSelection(planTitle: string): void {
    // Get the translated plan title
    this.translateService.get(planTitle).subscribe((translatedTitle: string) => {
      this.analyticsService.trackButtonClick(translatedTitle, 'Pricing Section');
      this.analyticsService.trackEvent('plan_selected', {
        'plan_name': translatedTitle
      });
    });
  }
}
