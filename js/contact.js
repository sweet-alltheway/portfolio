/**
 * Contact form — FormSubmit.co delivery for static sites.
 * Merge into Alpine via: ...createContactForm()
 */
const CONTACT_TO_EMAIL = 'rakk3129@gmail.com';

function createContactForm(options = {}) {
  const toEmail = options.toEmail || CONTACT_TO_EMAIL;
  const endpoint = options.endpoint || `https://formsubmit.co/ajax/${encodeURIComponent(toEmail)}`;
  const successResetMs = options.successResetMs ?? 8000;

  return {
    contact: { name: '', email: '', subject: '', message: '', honey: '' },
    contactStatus: 'idle',
    contactError: '',

    async submitContact() {
      if (this.contact.honey) return;

      this.contactStatus = 'sending';
      this.contactError = '';

      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            name: this.contact.name,
            email: this.contact.email,
            subject: this.contact.subject || 'Portfolio contact',
            message: this.contact.message,
            _subject: `Portfolio: ${this.contact.subject || 'New message'} from ${this.contact.name}`,
            _template: 'table',
            _captcha: 'false'
          })
        });

        const data = await res.json();

        if (res.ok && data.success) {
          this.contactStatus = 'success';
          this.contact = { name: '', email: '', subject: '', message: '', honey: '' };
          setTimeout(() => {
            if (this.contactStatus === 'success') this.contactStatus = 'idle';
          }, successResetMs);
        } else {
          throw new Error(data.message || 'Unable to send message');
        }
      } catch {
        this.contactStatus = 'error';
        this.contactError = `Could not send your message. Please try again or email ${toEmail} directly.`;
      }
    }
  };
}
