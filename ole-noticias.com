server {
  listen 80;
  server_name ole-noticias.com;
   # SSL configuration

    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    ssl_certificate         /etc/ssl/cert.pem;
    ssl_certificate_key     /etc/ssl/key.pem;



  location / {
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "Upgrade";
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_pass http://localhost:3001;
  }
}