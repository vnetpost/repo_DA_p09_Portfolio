import { Component, inject } from '@angular/core';
import { UserDatabankService } from '../../shared/services/userDatabankService/user-databank-service';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  userDBS = inject(UserDatabankService);

  getCounterLabel(index: number): string {
    return `0${index + 1}/0${this.userDBS.projectsData.length}`;
  }
}
