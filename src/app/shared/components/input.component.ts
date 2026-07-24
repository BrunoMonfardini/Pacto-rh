import { Component, forwardRef, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type InputType = 'text' | 'email' | 'password' | 'tel' | 'search';

/**
 * Campo de formulário reutilizável, compatível com Reactive Forms
 * (implementa ControlValueAccessor) — usar com [formControlName] ou [(ngModel)].
 */
@Component({
  selector: 'app-input',
  standalone: true,
  template: `
    <div class="form-group">
      @if (label()) {
        <label class="form-label" [for]="id()">{{ label() }}</label>
      }
      <input
        [id]="id()"
        class="form-control"
        [type]="type()"
        [placeholder]="placeholder()"
        [value]="value()"
        [disabled]="disabled()"
        (input)="onInput($event)"
        (blur)="onTouched()"
      />
      @if (error()) {
        <span class="form-error">{{ error() }}</span>
      }
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  id = input(`input-${Math.random().toString(36).slice(2, 9)}`);
  label = input<string | undefined>(undefined);
  type = input<InputType>('text');
  placeholder = input('');
  error = input<string | undefined>(undefined);

  protected readonly value = signal('');
  protected readonly disabled = signal(false);

  private onChange: (value: string) => void = () => {};
  protected onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.value.set(value ?? '');
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  protected onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.value.set(value);
    this.onChange(value);
  }
}
