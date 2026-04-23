<div align="center">

# 🛒 ShopZone

### A blazing-fast Single Page Application built with React

[![Live Demo](https://img.shields.io/badge/Live%20Demo-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](https://shop-zone-ek9yqc5tg-yogeshs-projects-8c5e493b.vercel.app/)
[![React](https://img.shields.io/badge/React_18-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev)
[![React Router](https://img.shields.io/badge/React_Router-%23CA4245.svg?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com)
[![Vite](https://img.shields.io/badge/Vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Vercel](https://img.shields.io/badge/Vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

<br />

> Browse products · Add to cart · Checkout — all without a single page reload.

<br />

</div>

---

## ✨ Features

🗂️ &nbsp;**Product Browsing** — 30+ live products fetched from DummyJSON API  
🔍 &nbsp;**Dynamic Detail Pages** — Image gallery, ratings, stock, brand info  
🛒 &nbsp;**Shopping Cart** — Add, remove, adjust quantities with live total  
💾 &nbsp;**Persistent Cart** — Survives page refreshes via localStorage  
🔐 &nbsp;**Guest Auth** — Fake login with a fully protected checkout route  
📱 &nbsp;**Responsive** — Clean experience on mobile, tablet, and desktop  

---

## 🚀 Live Demo

**👉 [https://shop-zone-ek9yqc5tg-yogeshs-projects-8c5e493b.vercel.app/](https://shop-zone-ek9yqc5tg-yogeshs-projects-8c5e493b.vercel.app/)**

---

## 🗺️ Pages & Routes

| Route | Page | Auth Required |
|:---|:---|:---:|
| `/` | 🏠 Home | — |
| `/shop` | 🏪 Product Grid | — |
| `/product/:id` | 📦 Product Detail | — |
| `/cart` | 🛒 Shopping Cart | — |
| `/contact` | 📬 Contact Form | — |
| `/login` | 🔐 Login | — |
| `/checkout` | ✅ Checkout | 🔒 Yes |

---

## 🧰 Tech Stack

| Tool | Purpose |
|:---|:---|
| ⚛️ &nbsp;React 18 | UI framework |
| 🔀 &nbsp;React Router DOM v6 | Client-side routing |
| 🌐 &nbsp;Context API | Global cart & auth state |
| 🎨 &nbsp;CSS Modules | Scoped component styling |
| 💾 &nbsp;localStorage | Cart & session persistence |
| 📦 &nbsp;DummyJSON API | Mock product data |
| ⚡ &nbsp;Vite | Build tool |
| 🚀 &nbsp;Vercel | Deployment |

---

## 🏁 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/your-username/shopzone.git
cd shopzone

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
shopzone/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Navbar.jsx          # 🔝 Sticky nav with live cart badge
│   ├── context/
│   │   ├── CartContext.jsx     # 🛒 Global cart + localStorage sync
│   │   └── AuthContext.jsx     # 🔐 Global auth + localStorage sync
│   ├── pages/
│   │   ├── Home.jsx            # 🏠 Landing page
│   │   ├── Shop.jsx            # 🏪 Product grid
│   │   ├── ProductDetail.jsx   # 📦 Dynamic product page
│   │   ├── Cart.jsx            # 🛒 Cart with order summary
│   │   ├── Contact.jsx         # 📬 Static contact form
│   │   ├── Login.jsx           # 🔐 Guest login page
│   │   └── Checkout.jsx        # ✅ Protected checkout
│   ├── routes/
│   │   └── ProtectedRoute.jsx  # 🚧 Auth guard component
│   └── App.jsx                 # 🗺️ All route definitions
├── vercel.json                 # ⚙️ SPA routing fix
└── package.json
```

---

## 🧠 Key Concepts Covered

<details>
<summary><b>⚛️ React Router DOM v6</b></summary>
<br>

- `BrowserRouter` — Enables client-side routing for the whole app
- `Routes` & `Route` — Maps URL paths to components
- `Link` & `NavLink` — SPA-safe navigation without page reloads
- `useNavigate` — Programmatic navigation (e.g. after login)
- `useParams` — Reads dynamic segments like `:id` from the URL
- `Navigate` — Declarative redirect inside components

</details>

<details>
<summary><b>🌐 Context API & Global State</b></summary>
<br>

- `createContext` — Creates a context object
- `Provider` — Broadcasts state to all child components
- `useContext` — Reads context value in any component
- Custom hooks (`useCart`, `useAuth`) — Clean access pattern
- Avoids prop drilling across deeply nested components

</details>

<details>
<summary><b>🪝 React Hooks Used</b></summary>
<br>

- `useState` — Local and global state management
- `useEffect` — Fetching data and syncing to localStorage
- `useContext` — Reading from CartContext and AuthContext
- `useParams` — Extracting product ID from URL
- `useNavigate` — Redirecting after login / logout

</details>

<details>
<summary><b>💾 localStorage Persistence</b></summary>
<br>

- Lazy `useState` initializer reads from localStorage on first load
- `useEffect` auto-saves state on every cart change
- Auth session persists across browser refreshes
- Cart never lost on accidental page reload

</details>

---

## 📡 Data Source

All product data is fetched live from the free **[DummyJSON API](https://dummyjson.com)**

```
GET https://dummyjson.com/products        → fetch all products
GET https://dummyjson.com/products/:id    → fetch single product
```

---

## ⚙️ Deployment

Hosted on **Vercel**. A `vercel.json` at the root fixes the classic SPA 404-on-refresh issue:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/" }] }
```

This tells Vercel to always serve `index.html` regardless of the URL,
letting React Router handle all routing on the client side.

---

## 📋 Assignment Levels

| Level | Focus | Status |
|:---|:---|:---:|
| 🟢 Level 1 | React Router, Dynamic Routes, useParams | ✅ Done |
| 🟡 Level 2 | Context API, Global Cart, Navbar Badge | ✅ Done |
| 🔴 Level 3 | Auth, Protected Routes, localStorage | ✅ Done |

---

<div align="center">

*Built with ⚛️ React — no page reloads were harmed in the making of this project.*

</div>