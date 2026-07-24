import { Component } from '@angular/core';
import { HeroComponent }          from './components/hero.component';
import { AudienceSplitComponent } from './components/audience-split.component';
import { AboutMauricioComponent } from './components/about-mauricio.component';
import { AboutPactorhComponent }  from './components/about-pactorh.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AudienceSplitComponent,
    AboutMauricioComponent,
    AboutPactorhComponent,
  ],
  template: `
    <app-hero />
    <app-audience-split />
    <app-about-mauricio />
    <app-about-pactorh />
  `,
})
export class HomeComponent {}
