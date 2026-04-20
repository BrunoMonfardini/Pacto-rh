import { Component } from '@angular/core';
import { HeroComponent } from './components/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent],
  template: `
    <app-hero />
    <!-- Próximos componentes vêm aqui -->
  `,
})
export class HomeComponent {}