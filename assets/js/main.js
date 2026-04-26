// TESTIMONIALS (hidden — kept as a no-op so any leftover handlers don't error)
function setTestimonial() {}

// MODAL
function openModal() {
  document.getElementById('modal').classList.add('open');
  document.getElementById('modal-title').textContent = 'Book a Quote';
  document.getElementById('modal-sub').textContent = 'Fill in your details and I\'ll get back to you within 24 hours.';
  return false;
}
function closeModal() { document.getElementById('modal').classList.remove('open'); }
function closeModalOnOverlay(e) { if (e.target.id === 'modal') closeModal(); }

// SUBMISSION CONFIRMATION
document.addEventListener('DOMContentLoaded', function () {
  const p = new URLSearchParams(window.location.search).get('submitted');
  if (!p) return;
  const msg = 'Your quote request has been received. I\'ll be in touch within 24 hours.';
  document.getElementById('success-msg').textContent = msg;
  document.getElementById('success-modal').classList.add('open');
  history.replaceState(null, '', window.location.pathname + '#contact');
});

function closeSuccessModal() {
  document.getElementById('success-modal').classList.remove('open');
}

// LIGHTBOX
function openLightbox(src, caption) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox-img').alt = caption;
  document.getElementById('lightbox-caption').textContent = caption;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeLightbox();
});

// MOBILE NAV
function toggleNav() {
  const links = document.querySelector('.nav-links');
  const btn = document.querySelector('.nav-toggle');
  const open = links.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
}
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('open');
    document.querySelector('.nav-toggle').setAttribute('aria-expanded', 'false');
  });
});
