import { Routes } from '@angular/router';
import { MainPage } from './main-page/main-page';
import { LegalNotice } from './main-page/legal-notice/legal-notice';
import { PrivacyPolicy } from './main-page/privacy-policy/privacy-policy';

export const routes: Routes = [
  { path: '', component: MainPage },
  { path: 'legal-notice', component: LegalNotice },
  { path: 'privacy-policy', component: PrivacyPolicy },
];
