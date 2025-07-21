// scripts/generate-env.js
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
  const dashboardUrl = `http://${ip}:5173`;

  const envContent = `EXPO_PUBLIC_WEB_DASHBOARD_URL=${dashboardUrl}\n`;
  const tsContent = `// Este arquivo é gerado automaticamente. Não edite manualmente.
export const environment = {
  EXPO_PUBLIC_WEB_DASHBOARD_URL: '${dashboardUrl}',
};
`;

  const envPathMobile = path.resolve(__dirname, '../fiap-farms-mobile/.env');
  const envPathWebLogin = path.resolve(__dirname, '../fiap-farms-web-login/.env');
  const envPathGeneratedTs = path.resolve(__dirname, '../fiap-farms-web-login/src/environments/environment.generated.ts');

  fs.writeFileSync(envPathMobile, envContent);
  fs.writeFileSync(envPathWebLogin, envContent);
  fs.writeFileSync(envPathGeneratedTs, tsContent);

} else {
  console.error('Nenhum IP de rede válido encontrado.');
}
