import { Component } from '@angular/core';
import { Hero } from './hero/hero';

@Component({
  selector: 'app-main-page',
  imports: [Hero],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {

}
