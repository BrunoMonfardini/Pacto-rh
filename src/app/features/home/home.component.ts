import { Component } from '@angular/core';
import { HeroComponent }          from './components/hero.component';
import { AudienceSplitComponent } from './components/audience-split.component';
import { AboutMauricioComponent } from './components/about-mauricio.component';
import { TestimonialsComponent }  from './components/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AudienceSplitComponent,
    AboutMauricioComponent,
    TestimonialsComponent,
  ],
  template: `
    <app-hero />
    <app-audience-split />
    <app-about-mauricio />
    <app-testimonials />
  `,
})
export class HomeComponent {}