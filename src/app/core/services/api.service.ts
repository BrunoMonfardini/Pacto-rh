get(url: string) {
  return this.http.get(`${this.baseUrl}/${url}`);
}