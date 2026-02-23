import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { UserDatabankService } from '../../shared/services/userDatabankService/user-databank-service';

@Component({
  selector: 'app-contact-me',
  imports: [FormsModule, RouterLink, TranslatePipe],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss',
})
/**
 * Represents the ContactMe class.
 */
export class ContactMe implements OnDestroy {
  http = inject(HttpClient);

  userDBS = inject(UserDatabankService);
  formData = this.userDBS.contactFormData;

  mailTest = this.isLocalEnvironment(window.location.hostname);

  post = {
    endPoint: '/sendMail.php',
    body: (payload: { name: string; email: string; msg: string }) => payload,
  };

  toastVisible = false;
  toastMessage = '';
  toastType: 'success' | 'error' = 'success';
  private toastTimerId: ReturnType<typeof setTimeout> | null = null;
  private previousBodyOverflow: string | null = null;
  private previousHtmlOverflow: string | null = null;

  ngOnDestroy(): void {
    this.clearToastTimer();
    this.unlockPageScroll();
  }

  private isLocalEnvironment(hostname: string): boolean {
    if (
      hostname === 'localhost' ||
      hostname === '::1' ||
      hostname === '0.0.0.0' ||
      hostname.endsWith('.local')
    ) {
      return true;
    }

    if (/^127(?:\.\d{1,3}){3}$/.test(hostname)) {
      return true;
    }

    if (/^10(?:\.\d{1,3}){3}$/.test(hostname)) {
      return true;
    }

    if (/^192\.168(?:\.\d{1,3}){2}$/.test(hostname)) {
      return true;
    }

    return /^172\.(1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2}$/.test(hostname);
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      const payload = {
        name: this.formData.name,
        email: this.formData.email,
        msg: this.formData.msg,
      };

      this.http
        .post(this.post.endPoint, this.post.body(payload), {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .subscribe({
          next: (response: { ok?: boolean; message?: string } | null) => {
            if (!response?.ok) {
              console.error('Mail send failed', response?.message ?? 'Unexpected server response');
              this.showToast('error');
              return;
            }

            ngForm.resetForm();
            this.showToast('success');
          },
          error: (error) => {
            console.error('Mail send failed', error);
            this.showToast('error');
          },
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      // Local Angular dev server cannot execute PHP. Keep form workflow testable locally.
      setTimeout(() => {
        ngForm.resetForm();
        this.showToast('success');
      }, 600);
    }
  }

  private showToast(type: 'success' | 'error'): void {
    this.clearToastTimer();
    this.toastType = type;
    this.toastMessage = type === 'success' ? 'Email sent!' : 'Email-sending failed!';
    this.toastVisible = true;
    this.lockPageScroll();
    this.toastTimerId = setTimeout(() => {
      this.toastVisible = false;
      this.unlockPageScroll();
    }, 3200);
  }

  private clearToastTimer(): void {
    if (this.toastTimerId !== null) {
      clearTimeout(this.toastTimerId);
      this.toastTimerId = null;
    }
  }

  private lockPageScroll(): void {
    const html = document.documentElement;
    const body = document.body;

    if (this.previousHtmlOverflow === null) {
      this.previousHtmlOverflow = html.style.overflow;
      html.style.overflow = 'hidden';
    }

    if (this.previousBodyOverflow === null) {
      this.previousBodyOverflow = body.style.overflow;
      body.style.overflow = 'hidden';
    }
  }

  private unlockPageScroll(): void {
    const html = document.documentElement;
    const body = document.body;

    if (this.previousHtmlOverflow !== null) {
      html.style.overflow = this.previousHtmlOverflow;
      this.previousHtmlOverflow = null;
    }

    if (this.previousBodyOverflow !== null) {
      body.style.overflow = this.previousBodyOverflow;
      this.previousBodyOverflow = null;
    }
  }
}
