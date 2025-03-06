import http from "http";
import httpProxy from "http-proxy";

// List of local ports to rotate through
const localPorts = [3001, 3002, 3003]; // Replace with your desired ports
let currentPortIndex = 0;

// Create a proxy server
const proxy = httpProxy.createProxyServer({});

// Error handling
proxy.on("error", (err, req, res) => {
  console.error("Proxy error:", err);
  res.writeHead(500, {
    "Content-Type": "text/plain",
  });
  res.end("Something went wrong.");
});

// Function to get the next port in the rotation
function getNextPort() {
  const port = localPorts[currentPortIndex];
  currentPortIndex = (currentPortIndex + 1) % localPorts.length;
  return port;
}

// Create an HTTP server that will route requests through the proxy
const server = http.createServer((req, res) => {
  const targetUrl = "http://your-target-server.com"; // Replace with your target server

  const options = {
    target: targetUrl,
    localAddress: "0.0.0.0", // Use 0.0.0.0 to bind to all interfaces, or a specific IP address if needed
    localPort: getNextPort(), // Set the local port for the outgoing request
  };

  console.log(
    `Proxying request ${req.method} ${req.url} via port ${options.localPort} to ${targetUrl}`
  );

  proxy.web(req, res, options);
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log("Proxy server listening on port 3000");
});
