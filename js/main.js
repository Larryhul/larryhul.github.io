(function () {
  'use strict';
  const data = window.SITE_DATA;
  const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const safeUrl = value => {
    if (!value) return '';
    try { return ['https:', 'http:', 'mailto:', 'file:'].includes(new URL(value, location.href).protocol) ? value : ''; }
    catch { return ''; }
  };
  const link = (url, label) => safeUrl(url) ? `<a href="${escapeHtml(url)}">${escapeHtml(label)}</a>` : '';
  const content = {
      nav: { name: data.name, news: 'News', publications: 'Publications', projects: 'Projects', awards: 'Awards' },
      bio: {
        title: data.name,
        subtitle1: `${escapeHtml(data.title)} at ${link(data.universityUrl, data.university) || escapeHtml(data.university)}`,
        subtitle2: 'Automation (Elite Program), Guohao College',
        subtitle3: `Expected graduation: 2028 · ${escapeHtml(data.universityLocation)}`,
        desc1: escapeHtml(data.about),
        desc2: 'My research interests include multi-agent learning, robot learning and planning, embodied AI, and world models.'
      },
      news: { title: 'News & Updates' },
      publications: { title: 'Selected Publications', subtitle: 'arXiv preprints' },
      projects: { title: 'Research Projects' },
      awards: { title: 'Awards & Honors' }
  };

  function renderStaticContent() {
    document.querySelectorAll('[data-content]').forEach(element => {
      const value = element.dataset.content.split('.').reduce((result, key) => result && result[key], content);
      if (typeof value === 'string') element.innerHTML = value;
    });
  }

  function renderContent() {
    document.title = data.name;
    document.documentElement.lang = 'en';
    renderStaticContent();
    const photo = document.querySelector('.main-userinfo .info > div > img');
    photo.src = safeUrl(data.photo) || './assets/avatar-placeholder.svg';
    photo.alt = data.name;
    const contacts = [
      { url: data.email ? 'mailto:' + data.email : '', label: 'Email', icon: 'ic_4.svg' },
      { url: data.github, label: 'GitHub', icon: 'github.svg' },
      { url: data.scholar, label: 'Google Scholar', icon: 'ic_1.svg' },
      { url: data.twitter, label: 'Twitter', icon: 'ic_3.svg' }
    ].filter(item => safeUrl(item.url));
    const contactLinks = contacts.map(item => `<a class="profile-link" href="${escapeHtml(item.url)}" title="${escapeHtml(item.label)}"${item.url.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : ''}><img src="./assets/${item.icon}" alt="" aria-hidden="true"><span>${escapeHtml(item.label)}</span></a>`).concat(data.cv ? link(data.cv, 'CV') : []).filter(Boolean);
    document.querySelector('.info-right .icon').innerHTML = contactLinks.join('');
    document.querySelector('#news ul').innerHTML = data.news.map(item => `<li><span>${escapeHtml(item.date)}</span> — ${link(item.link, item.title) || escapeHtml(item.title)}</li>`).join('');
    document.getElementById('publication-list').innerHTML = data.publications.map(publication => {
      const authors = publication.authors.map(author => author === data.name ? `<b>${escapeHtml(author)}</b>` : escapeHtml(author)).join(', ');
      const links = [link(publication.paper, 'arXiv'), link(publication.project, 'Project'), link(publication.code, 'Code')].filter(Boolean);
      const bibId = `bib-${publication.id}`;
      if (publication.bibtex) links.push(`<a href="#${escapeHtml(bibId)}" class="bibtex" data-bib="${escapeHtml(bibId)}" aria-controls="${escapeHtml(bibId)}" aria-expanded="false">bibtex</a>`);
      return `<div class="selected-item"><img class="lazy-load" src="${escapeHtml(safeUrl(publication.art))}" alt="${escapeHtml(publication.artAlt || publication.id.toUpperCase())}"><div class="item-right"><h3 class="item-title">${escapeHtml(publication.title)}</h3><p class="decs">${authors}</p><p class="decs">${escapeHtml(publication.type)} · ${escapeHtml(publication.year)}</p><div class="button">${links.join('')}</div></div></div>${publication.bibtex ? `<pre class="bibtex-content" id="${escapeHtml(bibId)}" hidden><code>${escapeHtml(publication.bibtex)}</code></pre>` : ''}`;
    }).join('');
    document.querySelector('#projects ul').innerHTML = data.projects.map(project => `<li><span>${escapeHtml(project.title)}</span><br><strong>${escapeHtml(project.role)}</strong> · ${escapeHtml(project.program)}</li>`).join('');
    document.querySelector('#awards ul').innerHTML = data.honors.map(item => `<li>${item.year ? `${escapeHtml(item.year)} ` : ''}${escapeHtml(item.title)}${item.detail ? ` — ${escapeHtml(item.detail)}` : ''}</li>`).join('');
    onResize();
  }

  // Match the reference's breakpoint, proportional mobile sizing, and visibility.
  function onResize() {
    const mobile = innerWidth <= 768;
    document.documentElement.style.fontSize = mobile ? `${100 * (document.documentElement.clientWidth / 430)}px` : '';
    for (const [selector, display] of [
      ['.head-pc', mobile ? 'none' : 'flex'], ['.head-phone', mobile ? 'flex' : 'none']
    ]) document.querySelectorAll(selector).forEach(element => { element.style.display = display; });
    document.querySelector('.main').style.display = 'block';
    const headerHeight = document.querySelector('.main-head').getBoundingClientRect().height;
    document.documentElement.style.setProperty('--anchor-offset', mobile ? `${headerHeight + 8}px` : '0px');
    if (!mobile && modal.classList.contains('modal-active')) toggleMenu(false, false);
  }

  const menuButton = document.querySelector('.menu-phone');
  const closeButton = document.querySelector('.modal-close');
  const modal = document.querySelector('.modal');
  const backgroundContent = document.querySelectorAll('.main-head, #main-content');
  let previousFocus;
  function toggleMenu(open, returnFocus = true) {
    const wasOpen = modal.classList.contains('modal-active');
    if (open && !wasOpen) previousFocus = document.activeElement;
    modal.classList.toggle('modal-active', open);
    document.body.classList.toggle('noscroll', open);
    menuButton.setAttribute('aria-expanded', String(open));
    backgroundContent.forEach(element => { element.inert = open; });
    modal.inert = !open;
    modal.setAttribute('aria-hidden', String(!open));
    if (open) closeButton.focus({ preventScroll: true });
    else if (wasOpen && returnFocus && previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
  }
  for (const [button, label] of [[menuButton, 'Open navigation'], [closeButton, 'Close navigation']]) {
    button.setAttribute('role', 'button'); button.setAttribute('tabindex', '0'); button.setAttribute('aria-label', label);
    button.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      }
    });
  }
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-controls', 'mobile-navigation');
  menuButton.addEventListener('click', () => toggleMenu(true));
  closeButton.addEventListener('click', () => toggleMenu(false));
  document.addEventListener('keydown', event => {
    if (!modal.classList.contains('modal-active')) return;
    if (event.key === 'Escape') { event.preventDefault(); toggleMenu(false); }
    if (event.key === 'Tab') {
      const focusable = [...modal.querySelectorAll('[tabindex="0"], a[href]')];
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  document.querySelectorAll('.modal-content-item').forEach(item => item.addEventListener('click', event => {
    const anchor = event.target.closest('a');
    if (!anchor) return;
    event.preventDefault();
    document.querySelectorAll('.modal-content-item').forEach(sibling => sibling.classList.toggle('item-active', sibling === item));
    toggleMenu(false, false);
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      if (location.hash !== anchor.hash) history.pushState(null, '', anchor.hash);
      target.focus({ preventScroll: true });
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }));
  document.body.addEventListener('click', event => {
    const button = event.target.closest('[data-bib]');
    if (!button) return;
    event.preventDefault();
    const citation = document.getElementById(button.dataset.bib);
    const expanded = citation.hidden;
    citation.hidden = !expanded;
    button.style.background = expanded ? 'rgba(189,220,255,0.30)' : 'none';
    button.setAttribute('aria-expanded', String(expanded));
  });
  addEventListener('resize', onResize);
  renderContent();
})();
