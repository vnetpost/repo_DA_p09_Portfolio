import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { SectionSeperatorRightLeft } from '../../shared/components/section-seperator-right-left/section-seperator-right-left';

@Component({
  selector: 'app-about-me',
  imports: [SectionSeperatorRightLeft, TranslatePipe],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {

}
