import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Pipe, PipeTransform } from '@angular/core';
import { ReplacePipe } from '../../shared/pipes/replace.pipe';

@Pipe({
  name: 'removeSpaces',
  standalone: true
})
export class RemoveSpacesPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    return value.replace(/\s+/g, '');
  }
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(public translate: TranslateService) {}
  currentYear = new Date().getFullYear();
}
