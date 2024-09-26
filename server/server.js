const app = require('./app.js');
const os = require('os');

const PORT = process.env.PORT || 5000;

// Listen on all available network interfaces
app.listen(PORT, '0.0.0.0', () => {
  const networkInterfaces = os.networkInterfaces();
  let networkAddress;

  // Loop through each network interface to find the correct IPv4 address
  for (const interfaceName of Object.keys(networkInterfaces)) {
    for (const iface of networkInterfaces[interfaceName]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        networkAddress = iface.address;
        break;
      }
    }
    if (networkAddress) break;
  }

  if (!networkAddress) {
    networkAddress = '192.168.1.16';
  }

  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Network: http://${networkAddress}:${PORT}`);
});
