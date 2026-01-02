import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

type Lang = 'en' | 'de';
@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isMenuOpen = false;
  lang: Lang = 'en';

  setLang(l: Lang) {
    this.lang = l;
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
