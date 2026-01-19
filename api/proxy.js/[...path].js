export default async function handler(req, res) {
  try {
    const backendURL = "http://178.16.139.140:8080";

    const path = req.query.path.join("/");
    const targetUrl = `${backendURL}/api/${path}`;

    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        "Content-Type": "application/json",
      },
      body:
        req.method !== "GET" && req.method !== "HEAD"
          ? JSON.stringify(req.body)
          : undefined,
    });

    const text = await response.text();
    res.status(response.status).send(text);
  } catch (err) {
    console.error("Proxy error:", err);
    res.status(500).json({ error: "Proxy failed" });
  }
}
