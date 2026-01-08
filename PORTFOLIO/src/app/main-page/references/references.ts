import { Component, inject } from '@angular/core';
import { UserDatabankService } from '../../shared/services/userDatabankService/user-databank-service';
import { SectionSeperatorRightLeft } from '../../shared/components/section-seperator-right-left/section-seperator-right-left';

@Component({
  selector: 'app-references',
  imports: [SectionSeperatorRightLeft],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References {
  userDBS = inject(UserDatabankService);
}
