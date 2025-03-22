import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  constructor(
    private translate: TranslateService,
    private titleService: Title,
    private metaService: Meta
  ) {
    // Add languages
    this.translate.addLangs(['en', 'ru', 'ua']);
    
    // Set default language
    this.translate.setDefaultLang('en');
    
    // Try to get the browser language
    const browserLang = this.translate.getBrowserLang();
    
    // Try to get user's previously selected language
    const savedLang = localStorage.getItem('preferredLanguage');
    
    // Use savedLang if available, otherwise try to match browserLang, or use default
    const initialLang = savedLang || 
                      (browserLang && this.translate.getLangs().includes(browserLang) ? browserLang : 'en');
    
    // Set the current language
    this.translate.use(initialLang);
    
    // Set initial HTML lang attribute
    this.updateHtmlLangAttribute(initialLang);

    // Update title and meta description when language changes
    this.translate.onLangChange.subscribe(event => {
      this.updateHtmlLangAttribute(event.lang);
      this.updateTitleAndDescription(event.lang);
    });

    // Set initial title and meta description
    this.updateTitleAndDescription(initialLang);
  }

  /**
   * Change the current language
   * @param lang Language code to change to
   */
  changeLanguage(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('preferredLanguage', lang);
  }

  /**
   * Get the current language
   * @returns The current language code
   */
  getCurrentLang(): string {
    return this.translate.currentLang;
  }

  /**
   * Get available languages
   * @returns Array of available language codes
   */
  getAvailableLanguages(): string[] {
    return this.translate.getLangs();
  }

  /**
   * Update the HTML lang attribute
   * @param lang Language code to set
   */
  private updateHtmlLangAttribute(lang: string): void {
    document.documentElement.lang = lang;
  }

  /**
   * Update title and meta description based on the current language
   * @param lang Language code
   */
  private updateTitleAndDescription(lang: string): void {
    this.translate.get('META.TITLE').subscribe((title: string) => {
      this.titleService.setTitle(title);
    });

    this.translate.get('META.DESCRIPTION').subscribe((description: string) => {
      this.metaService.updateTag({ name: 'description', content: description });
    });
  }
} 