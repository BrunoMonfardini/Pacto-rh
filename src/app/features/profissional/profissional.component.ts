import { Component } from '@angular/core';

@Component({
  selector: 'app-profissional',
  standalone: true,
  imports: [],
  // theme-red: única página, junto com /empresa, onde a paleta vermelho/azul
  // institucional aparece — o resto do site usa preto como cor padrão.
  template: `
    <div class="theme-red" style="padding-top:calc(80px + var(--navbar-height));text-align:center">
      <h1 class="section-title">Para Profissionais — em breve</h1>
    </div>
  `,
})
export class ProfissionalComponent {}