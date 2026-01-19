export default async function handler(req, res) {
  try {
    const backendURL = "http://178.16.139.140:8080";

    const response = await fetch(`${backendURL}${req.url}`, {
      method: req.method,
      headers: {
        "Content-Type": "application/json",
      },
      body:
        req.method !== "GET"
          ? JSON.stringify(req.body)
          : undefined,
    });

    const data = await response.text();
    res.status(response.status).send(data);
  } catch (err) {
    console.error("Proxy error:", err);
    res.status(500).json({ error: "Proxy failed" });
  }
}
