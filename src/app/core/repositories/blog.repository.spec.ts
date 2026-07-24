import { beforeEach, describe, expect, it } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { BlogRepository } from './blog.repository';
import { API_CONFIG } from '../../config/api.config';

describe('BlogRepository', () => {
  let repository: BlogRepository;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    repository = TestBed.inject(BlogRepository);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('busca a lista completa de posts no endpoint do blog', () => {
    repository.getAll().subscribe();

    httpMock.expectOne(`${API_CONFIG.baseUrl}${API_CONFIG.endpoints.blog}`).flush([]);
  });

  it('busca um post específico pelo id', () => {
    repository.getById('42').subscribe();

    httpMock.expectOne(`${API_CONFIG.baseUrl}${API_CONFIG.endpoints.blog}/42`).flush({});
  });

  it('busca um post pelo slug usando a rota dedicada', () => {
    repository.getBySlug('como-liderar-equipes').subscribe();

    httpMock
      .expectOne(`${API_CONFIG.baseUrl}${API_CONFIG.endpoints.blog}/slug/como-liderar-equipes`)
      .flush({});
  });
});
