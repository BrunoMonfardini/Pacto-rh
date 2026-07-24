import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { SectionComponent } from '../../../shared/components/section.component';
import { CardComponent } from '../../../shared/components/card.component';
import { extractErrorMessage } from '../../../core/utils/http-error.util';

@Component({
  selector: 'app-verify-email',
  standalone: true,
  imports: [RouterLink, SectionComponent, CardComponent],
  templateUrl: './verify-email.component.html',
})
export class VerifyEmailComponent {
  private readonly authService = inject(AuthService);
  private readonly route = inject(ActivatedRoute);

  readonly loading = signal(true);
  readonly success = signal(false);
  readonly message = signal<string | null>(null);

  constructor() {
    const token = this.route.snapshot.queryParamMap.get('token') ?? '';
    this.authService.verifyEmail(token).subscribe({
      next: (response) => {
        this.message.set(response.message);
        this.success.set(true);
        this.loading.set(false);
      },
      error: (err: unknown) => {
        this.message.set(extractErrorMessage(err, 'Não foi possível verificar seu e-mail. O link pode ter expirado.'));
        this.success.set(false);
        this.loading.set(false);
      },
    });
  }
}
