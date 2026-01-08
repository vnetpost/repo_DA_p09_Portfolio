import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { AboutMe } from './about-me/about-me';
import { Skills } from './skills/skills';
import { Portfolio } from './portfolio/portfolio';
import { References } from './references/references';
import { ContactMe } from './contact-me/contact-me';
import { SectionSeperatorLeftRight } from '../shared/components/section-seperator-left-right/section-seperator-left-right';
import { SectionSeperatorRightLeft } from '../shared/components/section-seperator-right-left/section-seperator-right-left';

@Component({
  selector: 'app-main-page',
  imports: [Hero, AboutMe, Skills, Portfolio, References, ContactMe],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {}
