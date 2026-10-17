#!/usr/bin/env python3
"""
Reva Phoenix Local Development & CMS API Server
Serves static files and provides API endpoints for admin panel content & image uploads.
"""

import os
import sys
import json
import time
import cgi
import mimetypes
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler

PORT = 8000
WORKSPACE_DIR = os.path.dirname(os.path.abspath(__file__))
UPLOADS_DIR = os.path.join(WORKSPACE_DIR, "assets", "uploads")
DATA_FILE = os.path.join(WORKSPACE_DIR, "scraped_data", "custom_data.json")

os.makedirs(UPLOADS_DIR, exist_ok=True)
os.makedirs(os.path.dirname(DATA_FILE), exist_ok=True)

def get_client_safe_config():
    env_vars = {}
    env_file = os.path.join(WORKSPACE_DIR, '.env')
    if os.path.exists(env_file):
        with open(env_file, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith('#') and '=' in line:
                    k, v = line.split('=', 1)
                    env_vars[k.strip()] = v.strip().strip('"').strip("'")
    
    return {
        "firebase": {
            "apiKey": env_vars.get("FIREBASE_API_KEY", ""),
            "authDomain": env_vars.get("FIREBASE_AUTH_DOMAIN", ""),
            "projectId": env_vars.get("FIREBASE_PROJECT_ID", ""),
            "storageBucket": env_vars.get("FIREBASE_STORAGE_BUCKET", ""),
            "messagingSenderId": env_vars.get("FIREBASE_MESSAGING_SENDER_ID", ""),
            "appId": env_vars.get("FIREBASE_APP_ID", "")
        },
        "supabase": {
            "url": env_vars.get("SUPABASE_URL", ""),
            "anonKey": env_vars.get("SUPABASE_ANON_KEY", "")
        }
    }

class RevaCMSRequestHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=WORKSPACE_DIR, **kwargs)

    def end_headers(self):
        # Prevent caching for live development
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def do_GET(self):
        # Redirect /admin to /admin/ with trailing slash so relative paths resolve cleanly
        if self.path == '/admin':
            self.send_response(301)
            self.send_header('Location', '/admin/')
            self.end_headers()
            return

        # Route /admin/ and /admin.html directly to admin/index.html
        if self.path in ('/admin/', '/admin.html'):
            admin_index = os.path.join(WORKSPACE_DIR, 'admin', 'index.html')
            if os.path.exists(admin_index):
                self.send_response(200)
                self.send_header('Content-Type', 'text/html; charset=utf-8')
                self.end_headers()
                with open(admin_index, 'rb') as f:
                    self.wfile.write(f.read())
                return

        # Fallback aliases in case of any relative path requests
        if self.path == '/css/admin.css':
            target = os.path.join(WORKSPACE_DIR, 'admin', 'css', 'admin.css')
            if os.path.exists(target):
                self.send_response(200)
                self.send_header('Content-Type', 'text/css; charset=utf-8')
                self.end_headers()
                with open(target, 'rb') as f:
                    self.wfile.write(f.read())
                return

        if self.path == '/js/admin-app.js':
            target = os.path.join(WORKSPACE_DIR, 'admin', 'js', 'admin-app.js')
            if os.path.exists(target):
                self.send_response(200)
                self.send_header('Content-Type', 'application/javascript; charset=utf-8')
                self.end_headers()
                with open(target, 'rb') as f:
                    self.wfile.write(f.read())
                return

        # Handle /admin/assets/... requests gracefully
        if self.path.startswith('/admin/assets/'):
            rel_asset_path = self.path[len('/admin/'):]
            target = os.path.join(WORKSPACE_DIR, rel_asset_path.split('?')[0])
            if os.path.exists(target) and os.path.isfile(target):
                self.send_response(200)
                mtype, _ = mimetypes.guess_type(target)
                self.send_header('Content-Type', mtype or 'application/octet-stream')
                self.end_headers()
                with open(target, 'rb') as f:
                    self.wfile.write(f.read())
                return

        if self.path == '/api/config':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(get_client_safe_config()).encode('utf-8'))
            return

        if self.path == '/api/data':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            if os.path.exists(DATA_FILE):
                with open(DATA_FILE, 'r', encoding='utf-8') as f:
                    self.wfile.write(f.read().encode('utf-8'))
            else:
                self.wfile.write(b'{}')
            return

        return super().do_GET()

    def do_POST(self):
        if self.path == '/api/save-data':
            try:
                content_length = int(self.headers.get('Content-Length', 0))
                body = self.rfile.read(content_length).decode('utf-8')
                data = json.loads(body)
                
                with open(DATA_FILE, 'w', encoding='utf-8') as f:
                    json.dump(data, f, indent=2, ensure_ascii=False)
                
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"success": True, "message": "Saved to disk"}).encode('utf-8'))
                return
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"success": False, "error": str(e)}).encode('utf-8'))
                return

        elif self.path in ('/api/upload-image', '/api/upload-file'):
            try:
                content_type = self.headers.get('Content-Type', '')
                if 'multipart/form-data' in content_type:
                    form = cgi.FieldStorage(
                        fp=self.rfile,
                        headers=self.headers,
                        environ={'REQUEST_METHOD': 'POST', 'CONTENT_TYPE': content_type}
                    )
                    file_item = None
                    for key in ['file', 'image', 'video', 'media', 'document', 'pdf']:
                        if key in form and form[key].file:
                            file_item = form[key]
                            break
                    if file_item is None:
                        # Fallback: check first field with a file
                        for key in form.keys():
                            if getattr(form[key], 'file', None):
                                file_item = form[key]
                                break

                    if file_item is not None and file_item.file:
                        original_name = getattr(file_item, 'filename', 'uploaded_file.bin')
                        ext = os.path.splitext(original_name)[1].lower()
                        allowed_exts = [
                            '.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg', '.ico',
                            '.pdf', '.doc', '.docx',
                            '.mp4', '.webm', '.mov', '.mkv', '.ogg', '.mp3'
                        ]
                        if not ext or ext not in allowed_exts:
                            ext = '.bin'
                        
                        clean_base = "".join([c for c in os.path.splitext(original_name)[0] if c.isalnum() or c in ('-', '_')]).strip()
                        filename = f"{clean_base or 'asset'}_{int(time.time())}{ext}"
                        target_path = os.path.join(UPLOADS_DIR, filename)
                        
                        file_bytes = file_item.file.read()
                        with open(target_path, 'wb') as f:
                            f.write(file_bytes)
                        
                        rel_url = f"assets/uploads/{filename}"
                        self.send_response(200)
                        self.send_header('Content-Type', 'application/json')
                        self.end_headers()
                        self.wfile.write(json.dumps({
                            "success": True, 
                            "url": rel_url, 
                            "filename": filename,
                            "originalName": original_name,
                            "size": len(file_bytes)
                        }).encode('utf-8'))
                        return
                
                # Check if JSON payload with base64 data
                content_length = int(self.headers.get('Content-Length', 0))
                body = self.rfile.read(content_length).decode('utf-8')
                data = json.loads(body)
                if 'base64' in data:
                    import base64
                    raw_b64 = data['base64']
                    suggested_name = data.get('filename', '')
                    ext = os.path.splitext(suggested_name)[1].lower() if suggested_name else ''
                    
                    if ',' in raw_b64:
                        header, raw_b64 = raw_b64.split(',', 1)
                        if not ext:
                            if 'image/jpeg' in header or 'image/jpg' in header: ext = '.jpg'
                            elif 'image/png' in header: ext = '.png'
                            elif 'image/webp' in header: ext = '.webp'
                            elif 'image/svg' in header: ext = '.svg'
                            elif 'application/pdf' in header: ext = '.pdf'
                            elif 'video/mp4' in header: ext = '.mp4'
                            elif 'video/webm' in header: ext = '.webm'
                            elif 'video/quicktime' in header: ext = '.mov'
                    if not ext: ext = '.png'

                    file_data = base64.b64decode(raw_b64)
                    clean_name = "".join([c for c in os.path.splitext(suggested_name)[0] if c.isalnum() or c in ('-', '_')]).strip() if suggested_name else 'upload'
                    filename = f"{clean_name or 'upload'}_{int(time.time())}{ext}"
                    target_path = os.path.join(UPLOADS_DIR, filename)
                    with open(target_path, 'wb') as f:
                        f.write(file_data)
                    rel_url = f"assets/uploads/{filename}"
                    self.send_response(200)
                    self.send_header('Content-Type', 'application/json')
                    self.end_headers()
                    self.wfile.write(json.dumps({
                        "success": True, 
                        "url": rel_url, 
                        "filename": filename,
                        "size": len(file_data)
                    }).encode('utf-8'))
                    return

                self.send_response(400)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(b'{"success": false, "error": "No file found"}')
                return
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"success": False, "error": str(e)}).encode('utf-8'))
                return

        elif self.path == '/api/reset-data':
            if os.path.exists(DATA_FILE):
                os.remove(DATA_FILE)
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(b'{"success": true, "message": "Reset to defaults"}')
            return

        self.send_response(404)
        self.end_headers()

def run(port=PORT):
    server_address = ('', port)
    httpd = ThreadingHTTPServer(server_address, RevaCMSRequestHandler)
    print(f"Reva Phoenix CMS Server running on http://localhost:{port}/")
    print(f"Admin Panel: http://localhost:{port}/admin.html")
    httpd.serve_forever()

if __name__ == '__main__':
    port = PORT
    if len(sys.argv) > 1:
        port = int(sys.argv[1])
    run(port)
