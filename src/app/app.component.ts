// ============================================================
//  PACTO RH — app.component.ts
//  Descrição: Componente raiz da aplicação
//
//  Este componente é o ponto de entrada visual do Angular.
//  Ele renderiza o <router-outlet>, que é onde cada página
//  aparece conforme o usuário navega pelas rotas.
//
//  Como funciona:
//  URL / → HomeComponent aparece aqui dentro
//  URL /contato → ContactComponent aparece aqui dentro
// ============================================================
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',       // <app-root> no index.html
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet />`,
})
export class AppComponent {}