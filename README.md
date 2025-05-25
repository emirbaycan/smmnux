# Smmnux

**Smmnux** is a production-ready SaaS platform for real-time comparison of social media marketing (SMM) services and prices across multiple providers. Inspired by price comparison giants like Akakce or Cimri, Smmnux enables users to instantly discover the best deals on virtual services (followers, likes, comments, and more) from a variety of SMM panels.

The project leverages a modern full-stack architecture, advanced web scraping, and scalable infrastructure. It is designed for agencies, businesses, and entrepreneurs who demand performance, reliability, and extensibility.

---

## Features

* Real-time service and price comparison across SMM panels
* Modern, responsive frontend with React and Next.js (SSR)
* Backend API powered by Laravel for business logic, microservices for orders, payments, and tickets
* Selenium-based data collection and auto-update
* Dockerized infrastructure for one-command setup
* Redis caching and scalable database initialization
* Express.js-based payment API integration
* Multilingual, SEO-friendly, production-grade solution

---

## Tech Stack

* **Frontend:** React.js (with Next.js SSR), TypeScript, SCSS
* **Backend:** Laravel (PHP), Express.js (Node.js)
* **Web Scraping:** Selenium (Python)
* **Infrastructure:** Docker, Docker Compose, Redis, SQL

---

## Project Structure (Key Modules)

```
bootstrap/
├── ssr/                # Server-side rendering setup (React/Next.js)
├── app.php             # Laravel entrypoint
├── config/             # Laravel and service configs
├── database/           # Database setup, migrations
├── micro/
│   ├── blog/           # Blog microservice
│   ├── orders/         # Order microservice
│   └── payments/       # Payments API (Express.js, SQL)
├── public/             # Public assets
├── resources/
│   ├── css/
│   └── js/
│       ├── assets/
│       ├── Components/
│       ├── constants/
│       ├── Layouts/
│       ├── locales/
│       ├── Pages/
│       ├── services/
│       ├── types/
│       ├── app.tsx
│       ├── bootstrap.ts
│       ├── CurrencyContext.tsx
│       ├── i18n.ts
│       └── ssr.jsx
├── Dockerfile
├── docker-compose.yaml
├── .env                # Environment configuration
└── ...
```

---

## Getting Started

### Prerequisites

* [Docker](https://www.docker.com/get-started)
* [Node.js](https://nodejs.org/) (for local frontend/backend dev)

### 1. Clone the repository

```bash
git clone https://github.com/emirbaycan/smmnux.git
cd smmnux/bootstrap
```

### 2. Configure environment

Copy the `.env.example` file (if available) to `.env` and edit necessary secrets (API keys, DB config, etc.).

### 3. Build and start with Docker

```bash
docker-compose up --build
```

This will launch all core services: frontend (SSR), backend (Laravel), microservices, Selenium, Redis, and the database.

### 4. Access the application

Default: [http://localhost:3000](http://localhost:3000)  (Update if different in your docker-compose.yml)

---

## Customization & Extensibility

* Add new SMM panels by updating provider scraping logic and database seeds.
* Modify or extend payment methods in `micro/payments/` (Express.js).
* All frontend components are in `resources/js/Components/` and can be customized or themed as needed.

---

## Production Deployment

* Ensure all secrets are securely set in `.env` files.
* Build Docker images for production (`docker-compose -f docker-compose.prod.yml up --build` if available).
* Attach to your cloud infrastructure (AWS, GCP, DigitalOcean, etc.) or deploy on-premise.

---

## License

[MIT License](LICENSE)

---

## Author

Developed and maintained by [Emir Baycan](https://emirbaycan.com.tr/). For business inquiries or support, please visit the website or contact directly.
