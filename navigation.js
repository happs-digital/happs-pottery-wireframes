(function () {
  // Derive the root-relative prefix based on how deep the current page is
  function getRootPrefix() {
    var depth = window.location.pathname.split('/').filter(Boolean).length - 1;
    if (depth <= 0) return '';
    var prefix = '';
    for (var i = 0; i < depth; i++) prefix += '../';
    return prefix;
  }

  // Highlight active nav link
  function setActive(navEl, root) {
    var path = window.location.pathname;
    var links = navEl.querySelectorAll('a[data-page]');
    links.forEach(function (a) {
      var page = a.getAttribute('data-page');
      if (path.endsWith(page) || (page === 'index.html' && (path === '/' || path.endsWith('/')))) {
        a.classList.add('active');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var root = getRootPrefix();
    var body = document.body;
    var firstChild = body.firstChild;

    // 1. Banner
    var banner = document.createElement('div');
    banner.className = 'wf-banner';
    banner.textContent = 'WIREFRAME PROTOTYPE — INTERNAL REVIEW ONLY';
    body.insertBefore(banner, firstChild);

    // 2. Nav
    var nav = document.createElement('nav');
    nav.className = 'wf-nav';
    nav.innerHTML = [
      '<span class="wf-nav-brand">Happs Pottery</span>',
      '<div class="wf-nav-links">',
        '<a href="' + root + 'index.html" data-page="index.html">Home</a>',
        '<a href="' + root + 'experiences.html" data-page="experiences.html">Experiences</a>',
        '<a href="' + root + 'shop.html" data-page="shop.html">Shop</a>',
        '<a href="' + root + 'what-we-do.html" data-page="what-we-do.html">What We Do</a>',
        '<a href="' + root + 'about.html" data-page="about.html">About</a>',
        '<a href="' + root + 'visit.html" data-page="visit.html">Visit</a>',
        '<a href="' + root + 'contact.html" data-page="contact.html">Contact</a>',
      '</div>'
    ].join('');
    body.insertBefore(nav, banner.nextSibling);
    setActive(nav, root);

    // 3. Breadcrumb
    var bc = document.createElement('div');
    bc.className = 'wf-breadcrumb';
    bc.textContent = '← ' + (document.title || 'Page');
    body.insertBefore(bc, nav.nextSibling);

    // 4. Footer
    var footer = document.createElement('footer');
    footer.className = 'wf-footer';
    footer.innerHTML = [
      '<div class="wf-footer-grid">',
        '<div>',
          '<h4>Experiences</h4>',
          '<ul>',
            '<li><a href="' + root + 'book.html">Book an Experience</a></li>',
            '<li><a href="' + root + 'schools.html">Schools &amp; Groups</a></li>',
            '<li><a href="' + root + 'corporate.html">Corporate Gifts</a></li>',
            '<li><a href="' + root + 'open-studios.html">Open Studios 2026</a></li>',
          '</ul>',
        '</div>',
        '<div>',
          '<h4>Studio</h4>',
          '<ul>',
            '<li><a href="' + root + 'about.html">About</a></li>',
            '<li><a href="' + root + 'stories.html">Stories</a></li>',
            '<li><a href="' + root + 'visit.html">Visit</a></li>',
            '<li><a href="' + root + 'faq.html">FAQ</a></li>',
          '</ul>',
        '</div>',
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
      '<p class="wf-footer-note">Happs Pottery Wireframe Prototype — for internal review only · happspottery.com.au</p>'
    ].join('');
    body.appendChild(footer);
  });
})();
