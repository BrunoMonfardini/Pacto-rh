import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { SectionComponent } from '../../../shared/components/section.component';
import { CardComponent } from '../../../shared/components/card.component';
import { InputComponent } from '../../../shared/components/input.component';
import { ButtonComponent } from '../../../shared/components/button.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, SectionComponent, CardComponent, InputComponent, ButtonComponent],
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);

  readonly loading = signal(false);
  readonly successMessage = signal<string | null>(null);

  readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading.set(true);
    this.authService.forgotPassword(this.form.getRawValue().email).subscribe(({ message }) => {
      this.successMessage.set(message);
      this.loading.set(false);
    });
  }
}
