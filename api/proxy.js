export default async function handler(req, res) {
  try {
    const backendURL = "http://178.16.139.140:8080";

    const targetPath = req.url.replace("/api/proxy", "");
    const targetUrl = backendURL + targetPath;

    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        "Content-Type": "application/json",
      },
      body:
        req.method !== "GET"
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
