import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({ selector: 'app-solutions', standalone: true, imports: [RouterOutlet], template: `<router-outlet/><div style="padding:120px 24px;text-align:center"><h2>Soluções — em breve</h2></div>` })
export class SolutionsComponent {}