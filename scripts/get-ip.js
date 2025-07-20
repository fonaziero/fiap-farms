const os = require('os');
const fs = require('fs');
const path = require('path');

function listLocalIPv4s() {
  const interfaces = os.networkInterfaces();
  const ips = [];

  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        ips.push({ name, address: iface.address });
      }
    }
  }

  return ips;
}

const validIps = listLocalIPv4s();

if (validIps.length > 1) {
  console.warn('⚠️ Múltiplos IPs encontrados. Usando o primeiro:');
  validIps.forEach((ip, idx) => {
    console.warn(`#${idx + 1}. ${ip.address} (${ip.name})`);
  });
}

if (validIps.length > 0) {
  const ip = validIps[0].address;
  const envContent = `EXPO_PUBLIC_WEB_DASHBOARD_URL=http://${ip}:5173\n`;

  const envPath = path.resolve(__dirname, '../fiap-farms-mobile/.env');

  fs.writeFileSync(envPath, envContent);

  console.log(`${ip}`);
} else {
  console.error(' Nenhum IP de rede válido encontrado.');
}
