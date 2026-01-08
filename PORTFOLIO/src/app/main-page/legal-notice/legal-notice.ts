import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserDatabankService } from '../../shared/services/userDatabankService/user-databank-service';

@Component({
  selector: 'app-legal-notice',
  imports: [RouterLink],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice {
  userDBS = inject(UserDatabankService);
}
