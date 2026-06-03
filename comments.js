(function () {

  var BASE = '/happs-pottery-wireframes/';

  // ── Inject CSS ──
  var style = document.createElement('style');
  style.textContent = [

    /* ── Toolbar — distinct UI chrome, not wireframe body ── */
    '#wf-toolbar{',
      'position:fixed;top:0;left:0;right:0;height:52px;',
      'background:rgb(0,89,221);',
      'box-shadow:0 2px 12px rgba(0,89,221,0.35);',
      'color:#fff;display:flex;align-items:center;',
      'z-index:9999;font-family:system-ui,-apple-system,sans-serif;',
      'font-size:13px;user-select:none;',
    '}',

    /* Left section — prototype identity */
    '.wf-tb-left{display:flex;align-items:center;gap:10px;padding:0 16px;flex:1;min-width:0;overflow:hidden;}',
    '.wf-tb-badge{',
      'font-family:"SF Mono","Fira Code","Consolas",monospace;',
      'font-size:14px;letter-spacing:0.04em;',
      'color:rgba(255,255,255,0.75);',
      'white-space:nowrap;',
    '}',
    '.wf-tb-title{',
      'font-size:13px;font-weight:500;color:#fff;',
      'white-space:nowrap;overflow:hidden;text-overflow:ellipsis;',
    '}',
    '.wf-tb-divider{width:1px;height:22px;background:rgba(255,255,255,0.25);flex-shrink:0;margin:0 4px;}',

    /* Sitemap nav buttons */
    '.wf-tb-nav-btn{',
      'font-size:12px;color:#fff;',
      'background:rgba(255,255,255,0.15);',
      'border:1px solid rgba(255,255,255,0.3);',
      'border-radius:4px;padding:5px 12px;',
      'cursor:pointer;text-decoration:none;white-space:nowrap;',
      'transition:background 0.15s,border-color 0.15s;',
      'font-family:inherit;line-height:1;',
    '}',
    '.wf-tb-nav-btn:hover{background:rgba(255,255,255,0.28);border-color:rgba(255,255,255,0.5);}',

    /* Right section — comment tools */
    '.wf-tb-right{',
      'display:flex;align-items:center;gap:8px;',
      'padding:0 16px;',
      'border-left:1px solid rgba(255,255,255,0.2);',
      'flex-shrink:0;',
    '}',
    '#wf-comment-count{',
      'background:rgba(255,255,255,0.2);color:#fff;',
      'border-radius:999px;padding:2px 9px;',
      'font-size:11px;font-weight:700;',
      'min-width:24px;text-align:center;',
      'display:none;border:1px solid rgba(255,255,255,0.35);',
    '}',
    '#wf-mode-toggle{',
      'background:#fff;color:rgb(0,89,221);',
      'border:none;border-radius:4px;',
      'padding:6px 14px;font-size:12px;font-weight:700;',
      'cursor:pointer;letter-spacing:0.03em;',
      'transition:background 0.15s;white-space:nowrap;font-family:inherit;',
    '}',
    '#wf-mode-toggle:hover{background:#e8f0ff;}',
    '#wf-mode-toggle.active{background:#f5c842;color:#111;}',
    '#wf-export-btn{',
      'background:transparent;color:#fff;',
      'border:1px solid rgba(255,255,255,0.35);border-radius:4px;',
      'padding:6px 14px;font-size:12px;',
      'cursor:pointer;transition:background 0.15s,border-color 0.15s;',
      'white-space:nowrap;font-family:inherit;',
    '}',
    '#wf-export-btn:hover{background:rgba(255,255,255,0.15);border-color:rgba(255,255,255,0.6);}',

    /* ── Page wrapper — layout handled in wireframe.css ── */
    '#wf-page{position:relative;}',
    'body.comment-mode #wf-page{cursor:crosshair;}',
    'body.comment-mode #wf-mode-toggle{background:#f5c842;color:#111;}',

    /* ── Comment pins ── */
    '.wf-pin{position:absolute;width:28px;height:28px;background:#f5c842;border:2px solid #111;border-radius:50% 50% 50% 0;transform:rotate(-45deg);cursor:pointer;z-index:8000;transition:transform .15s,box-shadow .15s;}',
    '.wf-pin:hover{transform:rotate(-45deg) scale(1.15);box-shadow:0 2px 8px rgba(0,0,0,.3);}',
    '.wf-pin .pin-num{position:absolute;top:50%;left:50%;transform:rotate(45deg) translate(-50%,-50%);font-size:10px;font-weight:700;color:#111;line-height:1;margin-top:-1px;}',

    /* ── Comment bubble ── */
    '.wf-bubble{position:absolute;background:#fff;border:1.5px solid #1a1a1a;border-radius:8px;padding:10px 12px;width:220px;z-index:8500;box-shadow:3px 3px 0 #1a1a1a;font-size:12px;line-height:1.5;color:#1a1a1a;display:none;}',
    '.wf-bubble.visible{display:block;}',
    '.wf-bubble .bubble-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;}',
    '.wf-bubble .bubble-num{font-weight:700;font-size:11px;color:#888;}',
    '.wf-bubble .bubble-close{cursor:pointer;font-size:14px;color:#888;line-height:1;padding:0 2px;}',
    '.wf-bubble .bubble-close:hover{color:#1a1a1a;}',
    '.wf-bubble .bubble-text{color:#333;}',
    '.wf-bubble .bubble-delete{margin-top:8px;font-size:10px;color:#bbb;cursor:pointer;text-decoration:underline;}',
    '.wf-bubble .bubble-delete:hover{color:#c00;}',

    /* ── Comment input popup ── */
    '#wf-input-popup{position:fixed;background:#fff;border:1.5px solid #1a1a1a;border-radius:8px;padding:12px;width:240px;z-index:9500;box-shadow:3px 3px 0 #1a1a1a;display:none;font-family:system-ui,-apple-system,sans-serif;}',
    '#wf-input-popup.visible{display:block;}',
    '#wf-input-popup label{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#888;display:block;margin-bottom:6px;}',
    '#wf-input-name{width:100%;border:1px solid #ddd;border-radius:4px;padding:6px 8px;font-size:12px;margin-bottom:8px;font-family:inherit;box-sizing:border-box;}',
    '#wf-input-text{width:100%;border:1px solid #ddd;border-radius:4px;padding:6px 8px;font-size:12px;resize:vertical;min-height:72px;font-family:inherit;box-sizing:border-box;}',
    '#wf-input-name:focus,#wf-input-text:focus{outline:none;border-color:#1a1a1a;}',
    '.wf-input-actions{display:flex;gap:8px;margin-top:8px;}',
    '#wf-input-save{flex:1;background:#1a1a1a;color:#fff;border:none;border-radius:4px;padding:7px;font-size:12px;font-weight:600;cursor:pointer;}',
    '#wf-input-save:hover{background:#333;}',
    '#wf-input-cancel{background:transparent;color:#888;border:1px solid #ddd;border-radius:4px;padding:7px 10px;font-size:12px;cursor:pointer;}',
    '#wf-input-cancel:hover{border-color:#888;color:#333;}',

    /* ── Export panel ── */
    '#wf-export-panel{position:fixed;top:62px;right:16px;background:#fff;border:1.5px solid #1a1a1a;border-radius:8px;padding:16px;width:320px;z-index:9000;box-shadow:3px 3px 0 #1a1a1a;display:none;font-size:12px;font-family:system-ui,-apple-system,sans-serif;}',
    '#wf-export-panel.visible{display:block;}',
    '#wf-export-panel h3{font-size:13px;margin-bottom:4px;}',
    '#wf-export-panel p{color:#888;font-size:11px;margin-bottom:10px;}',
    '#wf-export-text{width:100%;background:#f5f5f5;border:1px solid #ddd;border-radius:4px;padding:8px;font-size:11px;font-family:"SF Mono","Fira Code",monospace;min-height:120px;resize:none;line-height:1.6;box-sizing:border-box;}',
    '#wf-copy-btn{margin-top:8px;width:100%;background:#1a1a1a;color:#fff;border:none;border-radius:4px;padding:8px;font-size:12px;font-weight:600;cursor:pointer;}',
    '#wf-copy-btn:hover{background:#333;}',
    '#wf-export-close{position:absolute;top:12px;right:12px;cursor:pointer;color:#888;font-size:16px;line-height:1;}',
    '#wf-export-close:hover{color:#1a1a1a;}',

    /* ── Hint toast ── */
    '#wf-hint{position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#111;color:#fff;padding:8px 16px;border-radius:20px;font-size:12px;font-family:system-ui,-apple-system,sans-serif;z-index:9000;opacity:0;transition:opacity .3s;pointer-events:none;white-space:nowrap;border:1px solid #2a2a2a;}',
    '#wf-hint.visible{opacity:1;}'

  ].join('');
  document.head.appendChild(style);

  // ── State ──
  var commentMode = false;
  var comments    = [];
  var pendingX    = 0;
  var pendingY    = 0;
  var activeBubble = null;
  var PAGE_ID      = '';

  // ── Persist ──
  function loadComments() {
    try { var s = localStorage.getItem('wf-comments-' + PAGE_ID); if (s) comments = JSON.parse(s); } catch(e) {}
  }
  function saveComments() {
    try { localStorage.setItem('wf-comments-' + PAGE_ID, JSON.stringify(comments)); } catch(e) {}
  }

  // ── Toggle comment mode ──
  function toggleCommentMode() {
    commentMode = !commentMode;
    document.body.classList.toggle('comment-mode', commentMode);
    var btn = document.getElementById('wf-mode-toggle');
    btn.classList.toggle('active', commentMode);
    btn.textContent = commentMode ? '✕ Cancel' : '+ Add Comment';
    showHint(commentMode ? 'Click anywhere on the page to leave a comment' : '');
  }

  // ── Input popup ──
  function showInputPopup(clientX, clientY) {
    var popup = document.getElementById('wf-input-popup');
    popup.style.left = Math.min(clientX, window.innerWidth - 260) + 'px';
    popup.style.top  = Math.min(clientY + 8, window.innerHeight - 180) + 'px';
    popup.classList.add('visible');
    document.getElementById('wf-input-text').focus();
  }
  function closeInputPopup() {
    document.getElementById('wf-input-popup').classList.remove('visible');
    document.getElementById('wf-input-text').value = '';
  }
  function cancelComment() { closeInputPopup(); if (commentMode) toggleCommentMode(); }
  function saveComment() {
    var text = document.getElementById('wf-input-text').value.trim();
    var name = document.getElementById('wf-input-name').value.trim() || 'Anonymous';
    if (!text) { document.getElementById('wf-input-text').focus(); return; }
    var c = { id: Date.now(), x: pendingX, y: pendingY, text: text, name: name, num: comments.length + 1 };
    comments.push(c);
    saveComments();
    renderPin(c);
    updateCount();
    closeInputPopup();
    if (commentMode) toggleCommentMode();
    showHint('Comment #' + c.num + ' saved');
  }

  // ── Render pin ──
  function escHtml(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
  function renderPin(c) {
    var page = document.getElementById('wf-page');
    var pin  = document.createElement('div');
    pin.className   = 'wf-pin';
    pin.dataset.id  = c.id;
    pin.style.left  = (c.x - 14) + 'px';
    pin.style.top   = (c.y - 28) + 'px';
    pin.innerHTML   = '<span class="pin-num">' + c.num + '</span>';
    pin.addEventListener('click', function(e) { e.stopPropagation(); toggleBubble(c); });

    var bubble = document.createElement('div');
    bubble.className  = 'wf-bubble';
    bubble.dataset.id = c.id;
    bubble.style.left = (c.x + 16) + 'px';
    bubble.style.top  = (c.y - 28) + 'px';
    bubble.innerHTML  =
      '<div class="bubble-header">' +
        '<span class="bubble-num">#' + c.num + ' · ' + escHtml(c.name) + '</span>' +
        '<span class="bubble-close" data-close="' + c.id + '">✕</span>' +
      '</div>' +
      '<div class="bubble-text">' + escHtml(c.text) + '</div>' +
      '<div class="bubble-delete" data-delete="' + c.id + '">Delete comment</div>';
    page.appendChild(pin);
    page.appendChild(bubble);
    bubble.querySelector('[data-close]').addEventListener('click', function() { closeBubble(c.id); });
    bubble.querySelector('[data-delete]').addEventListener('click', function() { deleteComment(c.id); });
  }

  function toggleBubble(c) {
    var bubble = document.querySelector('.wf-bubble[data-id="' + c.id + '"]');
    if (!bubble) return;
    if (activeBubble && activeBubble !== bubble) activeBubble.classList.remove('visible');
    bubble.classList.toggle('visible');
    activeBubble = bubble.classList.contains('visible') ? bubble : null;
  }
  function closeBubble(id) {
    var b = document.querySelector('.wf-bubble[data-id="' + id + '"]');
    if (b) b.classList.remove('visible');
    activeBubble = null;
  }
  function deleteComment(id) {
    comments = comments.filter(function(c) { return c.id !== id; });
    comments.forEach(function(c, i) { c.num = i + 1; });
    saveComments();
    document.querySelectorAll('.wf-pin, .wf-bubble').forEach(function(el) { el.remove(); });
    comments.forEach(renderPin);
    updateCount();
  }

  // ── Export ──
  function toggleExport() {
    var panel = document.getElementById('wf-export-panel');
    panel.classList.toggle('visible');
    if (panel.classList.contains('visible')) buildExportText();
  }
  function buildExportText() {
    var date = new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });
    var text = document.title + ' — Wireframe Feedback\n' + date + '\n' + '----------------------------------------\n\n';
    text += comments.length === 0 ? '(No comments yet)' : comments.map(function(c) {
      return '#' + c.num + ' — ' + c.name + '\n' + c.text;
    }).join('\n\n');
    document.getElementById('wf-export-text').value = text.trim();
  }
  function copyComments() {
    var ta = document.getElementById('wf-export-text');
    ta.select(); document.execCommand('copy');
    var btn = document.getElementById('wf-copy-btn');
    btn.textContent = 'Copied ✓';
    setTimeout(function() { btn.textContent = 'Copy to clipboard'; }, 2000);
  }

  // ── Helpers ──
  function updateCount() {
    var el = document.getElementById('wf-comment-count');
    el.textContent = comments.length;
    el.style.display = comments.length > 0 ? 'inline-block' : 'none';
  }
  function showHint(msg) {
    var hint = document.getElementById('wf-hint');
    hint.textContent = msg;
    hint.classList.toggle('visible', !!msg);
    if (msg) setTimeout(function() { hint.classList.remove('visible'); }, 3000);
  }

  // ── Init ──
  document.addEventListener('DOMContentLoaded', function() {
    PAGE_ID = document.title.replace(/\s+/g, '-').toLowerCase();

    // Wrap all body children (header + main + footer from navigation.js) in #wf-page.wrapper
    var page = document.createElement('div');
    page.id        = 'wf-page';
    page.className = 'wrapper';
    while (document.body.firstChild) { page.appendChild(document.body.firstChild); }
    document.body.appendChild(page);

    // Toolbar — combined banner + comment controls
    var toolbar = document.createElement('div');
    toolbar.id = 'wf-toolbar';
    toolbar.innerHTML =
      '<div class="wf-tb-left">' +
        '<span class="wf-tb-badge">Prototype</span>' +
        '<span class="wf-tb-title">' + escHtml(document.title) + '</span>' +
        '<div class="wf-tb-divider"></div>' +
        '<a href="' + BASE + 'happs-sitemap.html" class="wf-tb-nav-btn">Proposed Sitemap</a>' +
        '<a href="' + BASE + 'sitemap.html" class="wf-tb-nav-btn">All Pages</a>' +
      '</div>' +
      '<div class="wf-tb-right">' +
        '<span id="wf-comment-count"></span>' +
        '<button id="wf-mode-toggle">+ Add Comment</button>' +
        '<button id="wf-export-btn">Export</button>' +
      '</div>';
    document.body.insertBefore(toolbar, page);

    // Comment input popup
    var popup = document.createElement('div');
    popup.id = 'wf-input-popup';
    popup.innerHTML =
      '<label>Your name</label>' +
      '<input id="wf-input-name" type="text" placeholder="e.g. Myles">' +
      '<label>Comment</label>' +
      '<textarea id="wf-input-text" placeholder="What do you think about this section?"></textarea>' +
      '<div class="wf-input-actions">' +
        '<button id="wf-input-cancel">Cancel</button>' +
        '<button id="wf-input-save">Save</button>' +
      '</div>';
    document.body.appendChild(popup);

    // Export panel
    var exportPanel = document.createElement('div');
    exportPanel.id = 'wf-export-panel';
    exportPanel.innerHTML =
      '<span id="wf-export-close">✕</span>' +
      '<h3>Export Comments</h3>' +
      '<p>Copy and paste into Slack or email.</p>' +
      '<textarea id="wf-export-text" readonly></textarea>' +
      '<button id="wf-copy-btn">Copy to clipboard</button>';
    document.body.appendChild(exportPanel);

    // Hint toast
    var hint = document.createElement('div');
    hint.id = 'wf-hint';
    document.body.appendChild(hint);

    // Wire up
    document.getElementById('wf-mode-toggle').addEventListener('click', toggleCommentMode);
    document.getElementById('wf-export-btn').addEventListener('click', toggleExport);
    document.getElementById('wf-input-cancel').addEventListener('click', cancelComment);
    document.getElementById('wf-input-save').addEventListener('click', saveComment);
    document.getElementById('wf-export-close').addEventListener('click', toggleExport);
    document.getElementById('wf-copy-btn').addEventListener('click', copyComments);

    // Page click → drop pin
    page.addEventListener('click', function(e) {
      if (!commentMode) return;
      if (e.target.closest('.wf-pin') || e.target.closest('#wf-input-popup')) return;
      closeInputPopup();
      var rect = page.getBoundingClientRect();
      pendingX = e.clientX - rect.left;
      pendingY = e.clientY - rect.top;
      showInputPopup(e.clientX, e.clientY);
    });

    // Close bubble on outside click
    document.addEventListener('click', function(e) {
      if (activeBubble && !e.target.closest('.wf-bubble') && !e.target.closest('.wf-pin')) {
        activeBubble.classList.remove('visible');
        activeBubble = null;
      }
    });

    loadComments();
    comments.forEach(renderPin);
    updateCount();
  });

})();
