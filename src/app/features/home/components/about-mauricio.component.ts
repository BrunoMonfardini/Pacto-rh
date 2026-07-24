import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-about-mauricio',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './about-mauricio.component.html',
  styleUrl: './about-mauricio.component.scss',
})
export class AboutMauricioComponent {}