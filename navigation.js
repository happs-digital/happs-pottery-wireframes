(function () {
  // Fixed base for GitHub Pages — all nav/footer links are absolute from here
  var BASE = '/happs-pottery-wireframes/';

  // Highlight active nav link
  function setActive(navEl) {
    var path = window.location.pathname;
    var links = navEl.querySelectorAll('a[data-page]');
    links.forEach(function (a) {
      var page = a.getAttribute('data-page');
      if (path.endsWith(page) || (page === 'index.html' && path === BASE)) {
        a.classList.add('active');
      }
    });
  }

  // SVG icons — nav actions
  var ICON_SEARCH  = '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="22" y2="22"/></svg>';
  var ICON_ACCOUNT = '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>';
  var ICON_CART    = '<svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>';

  // SVG icons — social (filled)
  var ICON_INSTAGRAM = '<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4.5" style="fill:#fff"/><circle cx="17.5" cy="6.5" r="1.2"/></svg>';
  var ICON_FACEBOOK  = '<svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>';
  var ICON_LINKEDIN  = '<svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>';

  document.addEventListener('DOMContentLoaded', function () {
    var root = BASE;
    var body = document.body;

    // ── 1. Wrap existing body children in <main> ──
    var main = document.createElement('main');
    while (body.firstChild) {
      main.appendChild(body.firstChild);
    }
    body.appendChild(main);

    // ── 2. Build <header> ──
    var header = document.createElement('header');
    header.className = 'wf-header';
    header.innerHTML = [
      '<div class="wf-header-inner">',
        '<nav class="wf-nav">',
          '<span class="wf-nav-brand">Happs Pottery</span>',
          '<div class="wf-nav-links">',
            '<a href="' + root + 'index.html" data-page="index.html">Home</a>',
            '<a href="' + root + 'experiences.html" data-page="experiences.html">Experiences</a>',
            '<a href="' + root + 'shop.html" data-page="shop.html">Shop</a>',
            '<a href="' + root + 'what-we-do.html" data-page="what-we-do.html">What We Do</a>',
            '<a href="' + root + 'about.html" data-page="about.html">About</a>',
            '<a href="' + root + 'visit.html" data-page="visit.html">Visit</a>',
            '<a href="' + root + 'contact.html" data-page="contact.html">Contact</a>',
          '</div>',
          '<div class="wf-nav-actions">',
            '<a href="' + root + 'shop.html" title="Search">' + ICON_SEARCH + '</a>',
            '<a href="' + root + 'account.html" title="Account">' + ICON_ACCOUNT + '</a>',
            '<a href="' + root + 'cart.html" title="Cart">' + ICON_CART + '</a>',
          '</div>',
        '</nav>',
        '<div class="wf-breadcrumb">← ' + (document.title || 'Page') + '</div>',
      '</div>'
    ].join('');
    body.insertBefore(header, main);
    setActive(header.querySelector('nav.wf-nav'));

    // ── 3. Build <footer> ──
    var footer = document.createElement('footer');
    footer.className = 'wf-footer';
    footer.innerHTML = [
      '<div class="wf-footer-inner">',
        '<div class="wf-footer-grid">',
          // Contact column
          '<div>',
            '<h4>Happs Pottery</h4>',
            '<ul>',
              '<li>749 Caves Road</li>',
              '<li>Dunsborough WA 6281</li>',
              '<li style="margin-top:0.5rem;"><a href="tel:+61XXXXXXXXX">[ Phone TBC ]</a></li>',
              '<li><a href="mailto:hello@happspottery.com.au">[ Email TBC ]</a></li>',
            '</ul>',
            '<div class="wf-footer-social">',
              '<a href="#" title="Instagram" aria-label="Instagram">' + ICON_INSTAGRAM + '</a>',
              '<a href="#" title="Facebook" aria-label="Facebook">' + ICON_FACEBOOK + '</a>',
              '<a href="#" title="LinkedIn" aria-label="LinkedIn">' + ICON_LINKEDIN + '</a>',
            '</div>',
          '</div>',
          // Experiences column
          '<div>',
            '<h4>Experiences</h4>',
            '<ul>',
              '<li><a href="' + root + 'book.html">Book an Experience</a></li>',
              '<li><a href="' + root + 'schools.html">Schools &amp; Groups</a></li>',
              '<li><a href="' + root + 'corporate.html">Corporate Gifts</a></li>',
              '<li><a href="' + root + 'open-studios.html">Open Studios 2026</a></li>',
            '</ul>',
          '</div>',
          // Studio column
          '<div>',
            '<h4>Studio</h4>',
            '<ul>',
              '<li><a href="' + root + 'about.html">About</a></li>',
              '<li><a href="' + root + 'stories.html">Stories</a></li>',
              '<li><a href="' + root + 'visit.html">Visit</a></li>',
              '<li><a href="' + root + 'faq.html">FAQ</a></li>',
            '</ul>',
          '</div>',
          // Legal column
          '<div>',
            '<h4>Legal</h4>',
            '<ul>',
              '<li><a href="' + root + 'privacy.html">Privacy Policy</a></li>',
              '<li><a href="' + root + 'terms.html">Terms &amp; Conditions</a></li>',
              '<li><a href="' + root + 'shipping.html">Shipping &amp; Returns</a></li>',
              '<li><a href="' + root + 'accessibility.html">Accessibility</a></li>',
            '</ul>',
          '</div>',
        '</div>',
        '<p class="wf-footer-note">Happs Pottery Wireframe Prototype — for internal review only · happspottery.com.au</p>',
      '</div>'
    ].join('');
    body.appendChild(footer);
  });
})();
