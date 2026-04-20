import { Component } from '@angular/core';
import { HeroComponent }             from './components/hero.component';
import { ServicesHighlightComponent } from './components/services-highlight.component';
import { TestimonialsComponent }      from './components/testimonials.component';
import { EbookBannerComponent }       from './components/ebook-banner.component';
import { BlogPreviewComponent }       from './components/blog-preview.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ServicesHighlightComponent,
    TestimonialsComponent,
    EbookBannerComponent,
    BlogPreviewComponent,
  ],
  template: `
    <app-hero />
    <app-services-highlight />
    <app-testimonials />
    <app-ebook-banner />
    <app-blog-preview />
  `,
})
export class HomeComponent {}