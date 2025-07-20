# 🌾 Fiap Farms

[![Node.js](https://img.shields.io/badge/node-20.x-green.svg)](https://nodejs.org/)
[![Expo](https://img.shields.io/badge/expo-SDK%2050-blue.svg)](https://expo.dev/)
[![Docker Compose](https://img.shields.io/badge/docker--compose-3.8-blue.svg)](https://docs.docker.com/compose/)
[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Aplicação fullstack para visualização e gerenciamento de dados agrícolas. Composta por um painel web (React + Vite) e um app mobile (Expo + React Native) integrados.

---

## 🎥 Demonstração

![Demonstração Fiap Farms](./docs/demo.gif)
> *Sugestão:* Grave o uso com o [Expo Go](https://expo.dev/client) e o navegador lado a lado com OBS ou Screenity.

---

## 📁 Estrutura do Projeto

```
fiap-farms/
├── fiap-farms-dashboard/     # Aplicação Web (React + Vite)
├── fiap-farms-mobile/        # Aplicação Mobile (Expo + React Native)
├── scripts/
│   └── get-ip.js             # Detecta o IP local para uso no app mobile
├── docker-compose.yml        # Orquestra os containers web + mobile
└── package.json              # Comando de inicialização unificada
```

---

## 📦 Requisitos

- [Node.js](https://nodejs.org/) `v20.x`
- [Docker](https://www.docker.com/) `v20+`
- [Docker Compose](https://docs.docker.com/compose/) `v2.20+`
- [Expo Go](https://expo.dev/client) instalado no celular

---

## 🧩 Bibliotecas principais

### 🌐 Web (`fiap-farms-dashboard`)

- `React 18`
- `Vite`
- `TailwindCSS`
- `Leaflet`
- `Firebase Auth`
- `React Router DOM`

### 📱 Mobile (`fiap-farms-mobile`)

- `Expo Router`
- `React Native`
- `Expo SDK 50`
- `Expo AuthSession`
- `Firebase Auth`
- `.env via EXPO_PUBLIC_*`

---

## 🚀 Como rodar o projeto

### 1. Clone o projeto

```bash
git clone https://github.com/fonaziero/fiap-farms.git
cd fiap-farms
```

### 2. Rode o projeto com IP dinâmico

```bash
npm run start
```

Esse comando irá:

- Gerar um `.env` com o IP da sua máquina local
- Subir os containers `fiap-farms-web` (porta 5173) e `fiap-farms-mobile` (Expo, via tunnel)

---

## 📱 Acessando o app Mobile (Expo Go)

1. Abra o app **Expo Go** no seu celular
2. Escaneie o **QR Code** exibido no terminal (após `docker-compose`)
3. O app será carregado remotamente

> 🔸 Importante: celular e computador precisam estar na **mesma rede Wi-Fi**

---

## 🛠️ Scripts úteis

```bash
# Reiniciar containers (caso algo quebre)
docker-compose down && npm run start

# Parar todos os serviços
docker-compose down
```

---

## 🧪 Testes e ambiente

- Testado com:
  - Node.js `v20.11.0`
  - Expo CLI `v7.4.0`
  - Expo Go no Android e iOS
  - Navegador Chrome e Firefox
- Sem necessidade de build nativo (apenas Expo Go)

---

## 🧠 Ideias futuras

- Integração com sensores IoT (umidade, solo)
- Visualização de safra por regiões
- Perfil do agricultor com preferências e histórico

---

## 📄 Licença

MIT © [Victor Fornaziero](https://github.com/fonaziero)

---

## 🐛 Dúvidas ou sugestões?

Abra uma [issue](https://github.com/fonaziero/fiap-farms/issues) ou entre em contato!
```