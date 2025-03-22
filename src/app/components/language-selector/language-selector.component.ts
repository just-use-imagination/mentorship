import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule],
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {
  currentLang: string;
  langs = [
    { code: 'en', name: 'English', flag: 'EN' },
    { code: 'ru', name: 'Русский', flag: 'RU' },
    { code: 'ua', name: 'Українська', flag: 'UA' }
  ];

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.currentLang || this.translate.getDefaultLang() || 'en';
  }

  ngOnInit(): void {
    // Subscribe to language changes
    this.translate.onLangChange.subscribe(event => {
      this.currentLang = event.lang;
    });
  }

  changeLanguage(langCode: string): void {
    this.translate.use(langCode);
    localStorage.setItem('preferredLanguage', langCode);
  }

  getCurrentLangInfo() {
    return this.langs.find(lang => lang.code === this.currentLang) || this.langs[0];
  }
} 