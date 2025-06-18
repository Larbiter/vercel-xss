fetch("/api/consumer/clients", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-XSRF-TOKEN": "eyJpdiI6InZTd...REMPLACER...",  // Ton token
  },
  body: JSON.stringify({
    name: "Exploit Corp",
    email: "exploit@attacker.com",
    phone: "0123456789"
  })
});
