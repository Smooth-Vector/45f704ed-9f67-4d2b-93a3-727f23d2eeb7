// TESTIMONIALS
const testimonials = [
  { text: '"Absolutely brilliant — our living room walls are perfectly smooth. She was tidy, professional and clearly passionate about her work. Would recommend Her Trowel to anyone."', author: '— Sarah T., Hadleigh' },
  { text: '"Couldn\'t be happier with the results. The ceiling looks flawless and the whole job was done with no fuss at all. Will definitely be using again."', author: '— Mark R., Bildeston' },
  { text: '"Finally found a plasterer who takes real pride in their work. Fair price, lovely finish, and even tidied up after herself perfectly."', author: '— Lisa &amp; Tom B., Stowmarket' },
];
function setTestimonial(i) {
  document.getElementById('testimonial-text').textContent = testimonials[i].text.replace(/"/g, '');
  document.getElementById('testimonial-text').innerHTML = testimonials[i].text;
  document.getElementById('testimonial-author').innerHTML = testimonials[i].author;
  document.querySelectorAll('.testimonial-dots span').forEach((s, j) => s.classList.toggle('active', i === j));
}
let tIdx = 0;
setInterval(() => { tIdx = (tIdx + 1) % 3; setTestimonial(tIdx); }, 5000);

// TABS (inline contact)
function switchTab(id) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  event.target.classList.add('active');
}

// MODAL
function openModal(type) {
  document.getElementById('modal').classList.add('open');
  if (type === 'callback') {
    document.getElementById('modal-title').textContent = 'Request a Callback';
    document.getElementById('modal-sub').textContent = 'Leave your number and I\'ll call you back as soon as possible.';
    document.getElementById('modal-quote').style.display = 'none';
    document.getElementById('modal-callback').style.display = 'block';
  } else {
    document.getElementById('modal-title').textContent = 'Book a Quote';
    document.getElementById('modal-sub').textContent = 'Fill in your details and I\'ll get back to you within 24 hours.';
    document.getElementById('modal-quote').style.display = 'block';
    document.getElementById('modal-callback').style.display = 'none';
  }
  return false;
}
function closeModal() { document.getElementById('modal').classList.remove('open'); }
function closeModalOnOverlay(e) { if (e.target.id === 'modal') closeModal(); }

// SUBMISSION CONFIRMATION
document.addEventListener('DOMContentLoaded', function () {
  const p = new URLSearchParams(window.location.search).get('submitted');
  if (!p) return;
  const msg = p === 'quote'
    ? 'Your quote request has been received. I\'ll be in touch within 24 hours.'
    : 'Your callback request has been received. I\'ll call you back as soon as possible.';
  document.getElementById('success-msg').textContent = msg;
  document.getElementById('success-modal').classList.add('open');
  history.replaceState(null, '', window.location.pathname + '#contact');
});

function closeSuccessModal() {
  document.getElementById('success-modal').classList.remove('open');
}
