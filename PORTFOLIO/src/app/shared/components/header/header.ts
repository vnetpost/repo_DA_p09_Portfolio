import { DOCUMENT } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserDatabankService } from '../../services/userDatabankService/user-databank-service';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

type Lang = 'en' | 'de';
@Component({
  selector: 'app-header',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  userDBS = inject(UserDatabankService);
  translate = inject(TranslateService);
  private readonly document: Document = inject(DOCUMENT);
  private readonly supportedLangs: Lang[] = ['en', 'de'];

  isMenuOpen = false;
  lang: Lang = 'en';

  constructor() {
    this.setLang(this.getBrowserLangOrDefault());
  }

  private getBrowserLangOrDefault(): Lang {
    const browserLang = this.translate.getBrowserLang();
    return browserLang && this.supportedLangs.includes(browserLang as Lang)
      ? (browserLang as Lang)
      : 'en';
  }

  setLang(l: Lang) {
    this.lang = l;
    this.translate.use(l);
    this.document.documentElement.lang = l;
    console.log(this.lang);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  @HostListener('document:keydown.escape')
  onEsc() {
    if (!this.isMenuOpen) return;
    this.closeMenu();
  }
}
