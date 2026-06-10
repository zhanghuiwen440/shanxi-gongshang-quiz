from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

os.chdir(r'd:\桌面\H5')
server = HTTPServer(('localhost', 8000), SimpleHTTPRequestHandler)
print('Server running at http://localhost:8000/')
server.serve_forever()