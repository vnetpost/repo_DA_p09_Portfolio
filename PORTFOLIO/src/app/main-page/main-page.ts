import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { AboutMe } from './about-me/about-me';
import { Skills } from './skills/skills';

@Component({
  selector: 'app-main-page',
  imports: [Hero, AboutMe, Skills],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {

}
