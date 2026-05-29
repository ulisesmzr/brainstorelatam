# Brainstore Platform · Deploy en 7 pasos

Stack: Next.js 16 + React 19 + Tailwind + OpenNext + Cloudflare Workers.

---

## ⚙️ Prerequisitos (una sola vez)

1. **Node.js 20+** instalado (verifica con `node -v`)
2. **Cuenta en Cloudflare** (gratis, en https://dash.cloudflare.com/sign-up)
3. **Git** instalado (verifica con `git --version`)

---

## 🚀 PASOS DE DEPLOY

### Paso 1 · Reemplazar tu carpeta actual

Asegúrate de que tu repo está sincronizado y abre la terminal en la carpeta padre:

```bash
cd ~                            # o donde tengas brainstore-platform
mv brainstore-platform brainstore-platform-old   # backup local por si acaso
```

Descomprime el ZIP nuevo `brainstore-platform.zip` en `~` (o donde tengas tus proyectos). Vas a quedar con `~/brainstore-platform` nuevo.

### Paso 2 · Conectar al repo de GitHub existente

```bash
cd ~/brainstore-platform
git init
git remote add origin https://github.com/<TU_USUARIO>/<TU_REPO>.git
git checkout -b main
```

Sustituye `<TU_USUARIO>` y `<TU_REPO>` por los reales (los mismos del `brainstore-platform` viejo).

### Paso 3 · Instalar dependencias

```bash
npm install
```

⏱️ ~2 min.

### Paso 4 · Probar en local

```bash
npm run dev
```

Abre **http://localhost:3000** → debes ver el home completo de Brainstore (Partner B2B en Latinoamérica, mapa, verticales, WhatsApp FAB, modal). Si todo se ve bien → `Ctrl+C` y sigue.

### Paso 5 · Login en Cloudflare

```bash
npx wrangler login
```

Se abre el navegador, autorizas a Wrangler, regresas a la terminal y verás `Successfully logged in.`

### Paso 6 · Preview en local con runtime real de Cloudflare

```bash
npm run preview
```

Esto compila con OpenNext y simula 100% cómo se va a comportar en Workers. Si carga en `http://localhost:8787` y el modal envía la solicitud → todo OK.

### Paso 7 · Deploy a producción

```bash
npm run deploy
```

Al terminar te muestra una URL tipo `https://brainstore.<tu-cuenta>.workers.dev` — **ese es tu sitio en vivo**.

---

## 🌐 Conectar el dominio brainstore.com.mx (después del paso 7)

1. En el dashboard de Cloudflare → **Workers & Pages → brainstore → Settings → Domains & Routes → Add → Custom Domain**
2. Escribe `brainstore.com.mx` y dale Add
3. Cloudflare te indica que cambies los **nameservers** de tu registrador actual (donde compraste el dominio) a:
   - `xxx.ns.cloudflare.com`
   - `yyy.ns.cloudflare.com`
4. Entras a tu registrador (GoDaddy/NIC México/donde sea) → cambias los nameservers → esperas 1-24 horas
5. Cuando propague, el sitio queda en `https://brainstore.com.mx` automático con SSL

---

## 📦 Comandos útiles

| Comando | Para qué |
|---|---|
| `npm run dev` | Desarrollo local (puerto 3000) |
| `npm run preview` | Simular Cloudflare Workers en local (puerto 8787) |
| `npm run deploy` | Deploy a producción |
| `npm run cf-typegen` | Generar tipos de las variables de Cloudflare |

---

## 🆘 Si algo falla

- **`npm install` falla** → asegúrate de tener Node 20+ (`node -v`)
- **`npm run preview` truena** → ejecuta `npx wrangler types` primero
- **`npm run deploy` pide login** → corre `npx wrangler login` y vuelve a intentar

Cualquier error: pega el output completo y lo resolvemos.
