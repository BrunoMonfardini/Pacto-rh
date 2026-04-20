import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ebook-banner',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './ebook-banner.component.html',
  styleUrl: './ebook-banner.component.scss',
})
export class EbookBannerComponent {
  submitted = signal(false);
  loading = signal(false);

  form = this.fb.group({
    name:  ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    // Simula envio — integrar com API depois
    setTimeout(() => {
      this.loading.set(false);
      this.submitted.set(true);
    }, 1500);
  }

  get nameInvalid(): boolean {
    const c = this.form.get('name');
    return !!(c?.invalid && c?.touched);
  }

  get emailInvalid(): boolean {
    const c = this.form.get('email');
    return !!(c?.invalid && c?.touched);
  }
}