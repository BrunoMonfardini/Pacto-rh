import { Component, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogRepository } from '../../core/repositories/blog.repository';
import { BlogPost } from '../../core/models';
import { SectionComponent } from '../../shared/components/section.component';
import { extractErrorMessage } from '../../core/utils/http-error.util';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [DatePipe, RouterLink, SectionComponent],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss',
})
export class BlogDetailComponent {
  private readonly blogRepository = inject(BlogRepository);
  private readonly route = inject(ActivatedRoute);

  readonly loading = signal(true);
  readonly errorMessage = signal<string | null>(null);
  readonly post = signal<BlogPost | null>(null);

  constructor() {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.blogRepository.getBySlug(slug).subscribe({
      next: (post) => {
        this.post.set(post);
        this.loading.set(false);
      },
      error: (err: unknown) => {
        this.errorMessage.set(extractErrorMessage(err, 'Post não encontrado.'));
        this.loading.set(false);
      },
    });
  }
}
