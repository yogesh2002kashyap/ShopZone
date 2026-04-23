# 🛒 ShopZone

A multi-page e-commerce frontend built as a Single Page Application (SPA) using React. Browse products, view details, and manage a shopping cart — all without a single page reload.

**Live Demo → [shopzone.vercel.app](https://shop-zone-ek9yqc5tg-yogeshs-projects-8c5e493b.vercel.app/)**

---

## Features

- **Product Browsing** — 30+ products fetched live from DummyJSON API
- **Product Detail Pages** — Dynamic routing with image gallery, rating, stock info
- **Shopping Cart** — Add, remove, and adjust quantities with real-time total
- **Persistent Cart** — Cart survives page refreshes via localStorage
- **Guest Authentication** — Fake login system with protected checkout route
- **Fully Responsive** — Works on mobile, tablet, and desktop

---

## Pages & Routes

| Route | Page | Protected |
|---|---|---|
| `/` | Home | No |
| `/shop` | Product Grid | No |
| `/product/:id` | Product Detail | No |
| `/cart` | Shopping Cart | No |
| `/contact` | Contact Form | No |
| `/login` | Login | No |
| `/checkout` | Checkout | ✅ Yes |

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI framework |
| React Router DOM v6 | Client-side routing |
| Context API | Global cart & auth state |
| CSS Modules | Scoped component styling |
| localStorage | Cart & session persistence |
| DummyJSON API | Mock product data |
| Vite | Build tool |
| Vercel | Deployment |

---

## Getting Started

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

## Project Structure

```
src/
├── components/
│   └── Navbar.jsx         # Sticky nav with cart badge
├── context/
│   ├── CartContext.jsx    # Global cart state + localStorage sync
│   └── AuthContext.jsx    # Global auth state + localStorage sync
├── pages/
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   ├── Contact.jsx
│   ├── Login.jsx
│   └── Checkout.jsx
├── routes/
│   └── ProtectedRoute.jsx # Auth guard for /checkout
└── App.jsx                # All route definitions
```

---

## Key Concepts Covered

**React Router** — `BrowserRouter`, `Routes`, `Route`, `Link`, `NavLink`, `useNavigate`, `useParams`, `Navigate`

**Context API** — `createContext`, `useContext`, `Provider`, custom hooks (`useCart`, `useAuth`)

**React Hooks** — `useState`, `useEffect`, `useParams`, `useNavigate`, `useContext`

**localStorage** — Lazy state initializer, `useEffect` sync for persistence

---

## Data Source

All product data is fetched from the free [DummyJSON API](https://dummyjson.com/products).

```
GET https://dummyjson.com/products        → all products
GET https://dummyjson.com/products/:id    → single product
```

---

## Deployment

Deployed on Vercel. A `vercel.json` file handles SPA routing so page refreshes don't return 404:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/" }] }
```

---

## Assignment

Built as **Mission 6** of a React learning curriculum covering:
- Level 1 — Navigation & Dynamic Routing
- Level 2 — Global State with Context API
- Level 3 — Auth, Protected Routes & Persistence

---

*Made with React — no page reloads were harmed in the making of this project.*