import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { AboutMe } from './about-me/about-me';
import { Skills } from './skills/skills';
import { Portfolio } from './portfolio/portfolio';
import { References } from './references/references';
import { ContactMe } from './contact-me/contact-me';
import { SectionSeperator } from '../shared/components/section-seperator/section-seperator';

@Component({
  selector: 'app-main-page',
  imports: [Hero, AboutMe, Skills, Portfolio, References, ContactMe, SectionSeperator],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {}
