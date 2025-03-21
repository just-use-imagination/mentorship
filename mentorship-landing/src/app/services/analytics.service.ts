import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

declare const gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  constructor(private router: Router) {
    // Track page views when routes change
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.trackPageView(event.urlAfterRedirects);
    });
  }

  /**
   * Track page views
   * @param path Current page path
   */
  trackPageView(path: string): void {
    if (typeof gtag === 'function') {
      gtag('config', 'G-4R876LCB4B', {
        'page_path': path
      });
    }
  }

  /**
   * Track custom events
   * @param eventName Name of the event
   * @param eventParams Additional parameters for the event
   */
  trackEvent(eventName: string, eventParams: Record<string, any> = {}): void {
    if (typeof gtag === 'function') {
      gtag('event', eventName, eventParams);
    }
  }

  /**
   * Track button clicks
   * @param buttonName Name or identifier of the button
   * @param buttonLocation Location or section where the button appears
   */
  trackButtonClick(buttonName: string, buttonLocation: string): void {
    this.trackEvent('button_click', {
      'button_name': buttonName,
      'button_location': buttonLocation
    });
  }

  /**
   * Track form submissions
   * @param formName Name or identifier of the form
   * @param formStatus Status of the submission (success, error)
   */
  trackFormSubmit(formName: string, formStatus: 'success' | 'error'): void {
    this.trackEvent('form_submit', {
      'form_name': formName,
      'form_status': formStatus
    });
  }

  /**
   * Track external link clicks
   * @param linkUrl URL of the external link
   * @param linkText Text of the link
   */
  trackExternalLinkClick(linkUrl: string, linkText: string): void {
    this.trackEvent('external_link_click', {
      'link_url': linkUrl,
      'link_text': linkText
    });
  }
} 