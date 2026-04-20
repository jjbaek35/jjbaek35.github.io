from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import parse_qs, urlparse
import json

class DemoHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path
        query = parse_qs(parsed.query)

        if path == "/":
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.end_headers()
            self.wfile.write(b"""
                <html>
                <head><title>Web Forensics Demo</title></head>
                <body>
                    <h1>Web Forensics Demo</h1>
                    <p><a href="/login">Go to Login</a></p>
                    <form action="/search" method="get">
                        <input type="text" name="q" placeholder="Search keyword">
                        <input type="submit" value="Search">
                    </form>
                    <p><a href="/api/data">View JSON API</a></p>
                </body>
                </html>
            """)

        elif path == "/login":
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.end_headers()
            self.wfile.write(b"""
                <html>
                <body>
                    <h2>Login Page</h2>
                    <form action="/submit" method="post">
                        <label>Username:</label>
                        <input type="text" name="username"><br><br>
                        <label>Password:</label>
                        <input type="password" name="password"><br><br>
                        <input type="submit" value="Login">
                    </form>
                </body>
                </html>
            """)

        elif path == "/search":
            keyword = query.get("q", [""])[0]
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.end_headers()
            response = f"""
                <html>
                <body>
                    <h2>Search Result</h2>
                    <p>You searched for: <b>{keyword}</b></p>
                    <a href="/">Back</a>
                </body>
                </html>
            """
            self.wfile.write(response.encode("utf-8"))

        elif path == "/api/data":
            data = {
                "user": "student1",
                "role": "analyst",
                "case_id": "CASE-2026-001"
            }
            body = json.dumps(data).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(body)))
            self.send_header("Set-Cookie", "sessionid=abc123; HttpOnly")
            self.end_headers()
            self.wfile.write(body)

        else:
            self.send_response(404)
            self.send_header("Content-Type", "text/plain; charset=utf-8")
            self.end_headers()
            self.wfile.write(b"404 Not Found")

    def do_POST(self):
        if self.path == "/submit":
            content_length = int(self.headers.get("Content-Length", 0))
            post_data = self.rfile.read(content_length).decode("utf-8")
            form = parse_qs(post_data)

            username = form.get("username", [""])[0]
            password = form.get("password", [""])[0]

            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.end_headers()

            response = f"""
                <html>
                <body>
                    <h2>Login Submitted</h2>
                    <p>Username: {username}</p>
                    <p>Password: {password}</p>
                    <a href="/">Back</a>
                </body>
                </html>
            """
            self.wfile.write(response.encode("utf-8"))
        else:
            self.send_response(404)
            self.end_headers()

if __name__ == "__main__":
    server = HTTPServer(("127.0.0.1", 8000), DemoHandler)
    print("Server running at http://127.0.0.1:8000")
    server.serve_forever()