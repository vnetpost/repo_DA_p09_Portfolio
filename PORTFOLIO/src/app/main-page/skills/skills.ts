import { Component, inject } from '@angular/core';
import { UserDatabankService } from '../../shared/services/userDatabankService/user-databank-service';
import { SectionSeperatorLeftRight } from '../../shared/components/section-seperator-left-right/section-seperator-left-right';

@Component({
  selector: 'app-skills',
  imports: [SectionSeperatorLeftRight],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  userDBS = inject(UserDatabankService);
}
