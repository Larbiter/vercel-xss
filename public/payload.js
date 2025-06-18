fetch("/api/consumer/clients", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-XSRF-TOKEN": "eyJpdiI6IjRuWUdibnIwMktPRGhMUDZKRGZCWWc9PSIsInZhbHVlIjoiWkRmQUd1b3dhUWdlMXcyZ3VoazRqUWtsNzVUNHhoSEFmYXdxSzJ2M3hmN1pZNHVKSHJmRnpSWXlIVzQ0Z3BWVWsyTmdXU2N2RUdBYnN5V2VJN1IyYmVXVUNoaGgvY3FiWWhkMGRUUnpNQmxOQ05HZ0czS2xmR24zRmZQZ0l1ZTMiLCJtYWMiOiIyYjMzNzBmZmM2MTkzZmEwNjViOGE0YjYyMWM3M2VjMzgyNDFmNjM1YTFlNDhjOTM5M2VlNTkzZTVlMTQ4YzFiIiwidGFnIjoiIn0%3D",  // Ton token
  },
  body: JSON.stringify({
    name: "Exploit Corp",
    email: "exploit@attacker.com",
    phone: "0123456789"
  })
});
