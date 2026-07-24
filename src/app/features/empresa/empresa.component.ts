import { Component } from '@angular/core';

@Component({
  selector: 'app-empresa',
  standalone: true,
  imports: [],
  // theme-blue: única página, junto com /profissional, onde a paleta azul/vermelho
  // institucional aparece — o resto do site usa preto como cor padrão.
  template: `
    <div class="theme-blue" style="padding-top:calc(80px + var(--navbar-height));text-align:center">
      <h1 class="section-title">Para Empresas — em breve</h1>
    </div>
  `,
})
export class EmpresaComponent {}