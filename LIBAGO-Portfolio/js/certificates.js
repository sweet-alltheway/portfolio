/**
 * Certificates showcase — merge into Alpine via: ...createCertificates()
 */
function createCertificates() {
  return {
    certItems: [
      {
        id: 1,
        title: 'Ethical Hacker',
        issuer: 'Cisco Networking Academy · Davao del Norte State College',
        year: 'Dec 2025',
        src: 'img/certs/Ethical_Hacker_certificate_libago-jemuel-dnsc-edu-ph_b69a09c6-94e0-4d50-bd80-e7379b9513c3-1.png'
      },
      {
        id: 2,
        title: 'Level App 2.0 — Top 15 Finalist ',
        issuer: 'Davao del Norte State College · Institute of Computing',
        year: 'Nov 2025',
        src: 'img/certs/20f7cc70-3b4c-44fe-903d-46752c7f0613.png'
      },
      {
        id: 3,
        title: 'Advanced Seminar Series — Day 1',
        issuer: 'Davao del Norte State College · Institute of Computing',
        year: 'Oct 2025',
        src: 'img/certs/2a5a548f-70c2-4ec0-9369-63a542d79ec4.png'
      },
      {
        id: 4,
        title: 'Advanced Seminar Series — Day 2',
        issuer: 'Davao del Norte State College · Institute of Computing',
        year: 'May 2025',
        src: 'img/certs/0d529cd2-8c09-4965-b4d0-5a02fe86f043.png'
      },
      {
        id: 5,
        title: 'Level App 2.0 — Participation',
        issuer: 'Davao del Norte State College · Institute of Computing',
        year: 'May 2025',
        src: 'img/certs/32eb6950-3fac-49f3-b1ca-2989e53b000b.png'
      }
    ],

    certModal: { open: false, title: '', issuer: '', year: '', src: '' },

    openCert(item) {
      this.certModal = {
        open: true,
        title: item.title,
        issuer: item.issuer,
        year: item.year,
        src: item.src
      };
      document.body.style.overflow = 'hidden';
    },

    closeCert() {
      this.certModal.open = false;
      document.body.style.overflow = '';
    }
  };
}
