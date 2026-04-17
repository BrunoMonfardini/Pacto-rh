constructor(private contactService: ContactService) {}

submit() {
  this.contactService.sendForm(this.form.value).subscribe();
}