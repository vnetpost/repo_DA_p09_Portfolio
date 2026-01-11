import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { UserDatabankService } from '../../shared/services/userDatabankService/user-databank-service';

@Component({
  selector: 'app-hero',
  imports: [TranslatePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  userDBS = inject(UserDatabankService);
}
