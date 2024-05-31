const express = require('express');
const path = require('path');
const geoip = require('geoip-lite');

const app = express();

// Configurar la carpeta de archivos estáticos para servir los archivos de la aplicación Vue
app.use(express.static(path.join(__dirname, 'dist')));

app.use((req, res, next) => {
  const ip = req.headers['x-forwarded-for'] || req.ip; 
  const geo = geoip.lookup(ip);
  console.log(ip, geo);
  
  // Verifica si la ubicación del usuario no es Argentina ni Chile
  // if (!(geo && ['AR', 'CL'].includes(geo.country))) {
  //   // Redirige al usuario a otra página o sitio web
  //   return res.redirect('https://www.google.com/');
  // }


  next();
});

app.get('/api/ip', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.ip;
  res.json({ ip });
});

// Configurar la ruta de la aplicación
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Puerto en el que el servidor escuchará las solicitudes
const port = process.env.PORT || 3002;

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
