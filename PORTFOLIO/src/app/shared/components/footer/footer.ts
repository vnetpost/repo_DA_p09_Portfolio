import { Component, inject } from '@angular/core';
import { UserDatabankService } from '../../services/userDatabankService/user-databank-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  userDBS = inject(UserDatabankService);
}
