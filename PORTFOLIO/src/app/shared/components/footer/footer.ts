import { Component, inject } from '@angular/core';
import { UserDatabankService } from '../../services/userDatabankService/user-databank-service';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  userDBS = inject(UserDatabankService);
}
