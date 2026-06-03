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
            '<a href="' + root + 'experiences/index.html" data-page="experiences/index.html">Experiences</a>',
            '<a href="' + root + 'shop/index.html" data-page="shop/index.html">Shop</a>',
            '<a href="' + root + 'page/what-we-do.html" data-page="page/what-we-do.html">What We Do</a>',
            '<a href="' + root + 'page/about.html" data-page="page/about.html">About</a>',
            '<a href="' + root + 'page/visit.html" data-page="page/visit.html">Visit</a>',
            '<a href="' + root + 'page/contact.html" data-page="page/contact.html">Contact</a>',
          '</div>',
          '<div class="wf-nav-actions">',
            '<a href="' + root + 'shop/index.html" title="Search">' + ICON_SEARCH + '</a>',
            '<a href="' + root + 'shop/account.html" title="Account">' + ICON_ACCOUNT + '</a>',
            '<a href="' + root + 'shop/cart.html" title="Cart">' + ICON_CART + '</a>',
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
              '<li><a href="' + root + 'page/book.html">Book an Experience</a></li>',
              '<li><a href="' + root + 'landing-page/schools.html">Schools &amp; Groups</a></li>',
              '<li><a href="' + root + 'landing-page/corporate.html">Corporate Gifts</a></li>',
              '<li><a href="' + root + 'landing-page/open-studios.html">Open Studios 2026</a></li>',
            '</ul>',
          '</div>',
          // Studio column
          '<div>',
            '<h4>Studio</h4>',
            '<ul>',
              '<li><a href="' + root + 'page/about.html">About</a></li>',
              '<li><a href="' + root + 'blog/stories.html">Stories</a></li>',
              '<li><a href="' + root + 'page/visit.html">Visit</a></li>',
              '<li><a href="' + root + 'page/faq.html">FAQ</a></li>',
            '</ul>',
          '</div>',
          // Legal column
          '<div>',
            '<h4>Legal</h4>',
            '<ul>',
              '<li><a href="' + root + 'policy/privacy.html">Privacy Policy</a></li>',
              '<li><a href="' + root + 'policy/terms.html">Terms &amp; Conditions</a></li>',
              '<li><a href="' + root + 'policy/shipping.html">Shipping &amp; Returns</a></li>',
              '<li><a href="' + root + 'policy/accessibility.html">Accessibility</a></li>',
            '</ul>',
          '</div>',
        '</div>',
        '<p class="wf-footer-note">Happs Pottery Wireframe Prototype — for internal review only · happspottery.com.au</p>',
      '</div>'
    ].join('');
    body.appendChild(footer);

    // ── 4. Floating "Book a Class" tab ──
    var bookTab = document.createElement('div');
    bookTab.className = 'wf-book-tab';
    bookTab.innerHTML = '<a href="' + root + 'page/book.html">Book a Session</a>';
    body.appendChild(bookTab);

    // ── 5. Promo popup — bottom left ──
    // Edit PROMO object to customise content
    var PROMO = {
      enabled:    true,
      badge:      'Open Studios 2026',
      heading:    'Book now for 12–27 September',
      body:       'Limited experience sessions available during Open Studios. Early bookings recommended.',
      image:      '[ Promo image ]',
      cta:        { label: 'Book a session', href: root + 'page/book.html' },
      storageKey: 'wf-promo-dismissed-v1'
    };
    if (PROMO.enabled && !localStorage.getItem(PROMO.storageKey)) {
      var promo = document.createElement('div');
      promo.className = 'wf-promo';
      promo.innerHTML =
        '<button class="wf-promo-close" aria-label="Close">✕</button>' +
        '<div class="wf-promo-image">' + PROMO.image + '</div>' +
        '<div class="wf-promo-body">' +
          '<span class="wf-promo-badge">' + PROMO.badge + '</span>' +
          '<div class="wf-promo-heading">' + PROMO.heading + '</div>' +
          '<p class="wf-promo-text">' + PROMO.body + '</p>' +
          '<a href="' + PROMO.cta.href + '" class="wf-promo-cta">' + PROMO.cta.label + '</a>' +
        '</div>';
      body.appendChild(promo);
      promo.querySelector('.wf-promo-close').addEventListener('click', function () {
        promo.classList.add('wf-promo-hidden');
        try { localStorage.setItem(PROMO.storageKey, '1'); } catch(e) {}
      });
    }

    // ── 6. Chat widget — bottom right ──
    // Toggle button
    var chatBtn = document.createElement('button');
    chatBtn.className = 'wf-chat-btn';
    chatBtn.setAttribute('aria-label', 'Open chat');
    chatBtn.setAttribute('aria-expanded', 'false');
    chatBtn.innerHTML =
      '<span class="wf-chat-icon-open"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></span>' +
      '<span class="wf-chat-icon-close" style="display:none;"><svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span>';
    body.appendChild(chatBtn);

    // Chat panel
    var chatPanel = document.createElement('div');
    chatPanel.className = 'wf-chat-panel';
    chatPanel.setAttribute('aria-hidden', 'true');
    chatPanel.innerHTML = [
      // Header
      '<div class="wf-chat-header">',
        '<div class="wf-chat-header-info">',
          '<div class="wf-chat-avatar">HP</div>',
          '<div>',
            '<div class="wf-chat-title">Happs Pottery</div>',
            '<div class="wf-chat-status"><span class="wf-chat-dot"></span>Ask us anything</div>',
          '</div>',
        '</div>',
        '<button class="wf-chat-panel-close" aria-label="Close chat">',
          '<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
        '</button>',
      '</div>',
      // Message area
      '<div class="wf-chat-messages">',
        '<div class="wf-chat-msg wf-chat-msg-agent">',
          '<p>Hi! I\'m here to help with questions about the studio, bookings, or our pottery.</p>',
        '</div>',
        '<div class="wf-chat-msg wf-chat-msg-agent">',
          '<p>What can I help you with today?</p>',
        '</div>',
      '</div>',
      // Quick reply shortcuts
      '<div class="wf-chat-shortcuts">',
        '<span class="wf-chat-shortcut-label">Quick questions</span>',
        '<div class="wf-chat-shortcut-list">',
          '<a href="' + root + 'page/book.html" class="wf-chat-shortcut">How do I book?</a>',
          '<a href="' + root + 'page/faq.html" class="wf-chat-shortcut">What\'s included?</a>',
          '<a href="' + root + 'page/visit.html" class="wf-chat-shortcut">Where are you?</a>',
          '<a href="' + root + 'landing-page/schools.html" class="wf-chat-shortcut">School groups</a>',
          '<a href="' + root + 'landing-page/corporate.html" class="wf-chat-shortcut">Corporate gifts</a>',
        '</div>',
      '</div>',
      // Input area
      '<div class="wf-chat-input-area">',
        '<input class="wf-chat-input" type="text" placeholder="Type a message or question…" />',
        '<button class="wf-chat-send" aria-label="Send">',
          '<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
        '</button>',
      '</div>',
      // Footer note
      '<div class="wf-chat-footer-note">Enquiries are forwarded to the studio · <em>AI responses coming soon</em></div>',
    ].join('');
    body.appendChild(chatPanel);

    // Toggle open/close
    function toggleChat() {
      var isOpen = chatPanel.classList.toggle('wf-chat-panel-open');
      chatBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      chatBtn.querySelector('.wf-chat-icon-open').style.display  = isOpen ? 'none' : '';
      chatBtn.querySelector('.wf-chat-icon-close').style.display = isOpen ? '' : 'none';
      if (isOpen) chatPanel.querySelector('.wf-chat-input').focus();
    }
    chatBtn.addEventListener('click', toggleChat);
    chatPanel.querySelector('.wf-chat-panel-close').addEventListener('click', toggleChat);

    // Send message — wireframe: just echoes input as a user bubble
    function sendMsg() {
      var input = chatPanel.querySelector('.wf-chat-input');
      var text = input.value.trim();
      if (!text) return;
      var msgs = chatPanel.querySelector('.wf-chat-messages');
      var userMsg = document.createElement('div');
      userMsg.className = 'wf-chat-msg wf-chat-msg-user';
      userMsg.innerHTML = '<p>' + text.replace(/</g,'&lt;') + '</p>';
      msgs.appendChild(userMsg);
      // Simulated reply
      setTimeout(function() {
        var reply = document.createElement('div');
        reply.className = 'wf-chat-msg wf-chat-msg-agent';
        reply.innerHTML = '<p>Thanks for your message — we\'ll get back to you shortly. Or visit our <a href="' + root + 'page/faq.html">FAQ page</a> for quick answers.</p>';
        msgs.appendChild(reply);
        msgs.scrollTop = msgs.scrollHeight;
      }, 800);
      input.value = '';
      msgs.scrollTop = msgs.scrollHeight;
    }
    chatPanel.querySelector('.wf-chat-send').addEventListener('click', sendMsg);
    chatPanel.querySelector('.wf-chat-input').addEventListener('keydown', function(e) {
      if (e.key === 'Enter') sendMsg();
    });

  });
})();
