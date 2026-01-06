import { Component, HostListener, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserDatabankService } from '../../services/userDatabankService/user-databank-service';

type Lang = 'en' | 'de';
@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  userDBS = inject(UserDatabankService);

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
