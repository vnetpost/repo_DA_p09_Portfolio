import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { UserDatabankService } from '../../shared/services/userDatabankService/user-databank-service';
import { SectionSeperatorLeftRight } from '../../shared/components/section-seperator-left-right/section-seperator-left-right';

@Component({
  selector: 'app-skills',
  imports: [SectionSeperatorLeftRight, TranslatePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
/**
 * Represents the Skills class.
 */
export class Skills {
  userDBS = inject(UserDatabankService);
}
