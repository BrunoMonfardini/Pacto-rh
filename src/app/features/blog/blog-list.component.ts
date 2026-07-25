import { Component, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BlogRepository } from '../../core/repositories/blog.repository';
import { BlogPost } from '../../core/models';
import { SectionComponent } from '../../shared/components/section.component';
import { ButtonComponent } from '../../shared/components/button.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { extractErrorMessage } from '../../core/utils/http-error.util';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [DatePipe, SectionComponent, ButtonComponent, ScrollRevealDirective],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss',
})
export class BlogListComponent {
  private readonly blogRepository = inject(BlogRepository);

  readonly loading = signal(true);
  readonly errorMessage = signal<string | null>(null);
  readonly posts = signal<BlogPost[]>([]);

  constructor() {
    this.blogRepository.getAll().subscribe({
      next: (posts) => {
        this.posts.set(posts);
        this.loading.set(false);
      },
      error: (err: unknown) => {
        this.errorMessage.set(extractErrorMessage(err, 'Não foi possível carregar os posts do blog.'));
        this.loading.set(false);
      },
    });
  }
}
