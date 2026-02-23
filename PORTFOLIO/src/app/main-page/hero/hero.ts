import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { UserDatabankService } from '../../shared/services/userDatabankService/user-databank-service';

@Component({
  selector: 'app-hero',
  imports: [TranslatePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
/**
 * Represents the Hero class.
 */
export class Hero {
  userDBS = inject(UserDatabankService);

  get displayName(): string {
    const fullName = this.userDBS.personalInfo.name?.trim() ?? '';
    const [firstName = '', lastName = ''] = fullName.split(/\s+/);
    return [firstName, lastName].filter(Boolean).join(' ');
  }
}
