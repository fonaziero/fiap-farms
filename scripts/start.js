const { exec } = require('child_process');
const { platform } = require('os');
const path = require('path');
const { spawn } = require('child_process');

const getIpScript = path.resolve(__dirname, 'get-ip.js');
require(getIpScript);

const docker = spawn('docker-compose', ['up', '--build'], {
  stdio: 'inherit',
  shell: true,
});

setTimeout(() => {
  const url = 'http://localhost:5174';

  let command;
  if (platform() === 'win32') {
    command = `start ${url}`;
  } else if (platform() === 'darwin') {
    command = `open ${url}`;
  } else {
    command = `xdg-open ${url}`;
  }

  exec(command, (err) => {
    if (err) {
      console.error('Erro ao abrir o navegador:', err.message);
    }
  });
}, 7000);
