# 🛍️ Product App — Backend

## Live Server

🌐 [https://product-app-backend-9dso.onrender.com](https://product-app-backend-9dso.onrender.com)

---

## Stack

- **Backend**: Node.js + Express + TypeScript + MongoDB

---

## Features

- ✅ Product listing with search & filter
- ✅ Responsive product card UI
- ✅ Add to cart / favorite
- ✅ User authentication (register/login)
- ✅ Full CRUD REST API
- ✅ Loading skeletons & error handling

---

## Getting Started

### Prerequisites
- Node.js >= 18
- MongoDB running locally or [MongoDB Atlas](https://cloud.mongodb.com)

### Setup

```bash
cd backend
cp .env.example .env    # Fill in MongoDB URI and JWT secret
npm install
npm run seed            # Seed sample data
npm run dev             # http://localhost:5000
```

### Environment Variables

```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/productdb
JWT_SECRET=your_secret_key_here
```

---

## API Endpoints

### Products

| Method | Endpoint           | Auth Required | Description        |
|--------|--------------------|---------------|--------------------|
| GET    | /api/products      | No            | Get all products   |
| GET    | /api/products/:id  | No            | Get single product |
| POST   | /api/products      | Yes (JWT)     | Create product     |
| PUT    | /api/products/:id  | Yes (JWT)     | Update product     |
| DELETE | /api/products/:id  | Yes (JWT)     | Delete product     |

### Authentication

| Method | Endpoint            | Auth Required | Description     |
|--------|---------------------|---------------|-----------------|
| POST   | /api/auth/register  | No            | Create account  |
| POST   | /api/auth/login     | No            | Sign in         |

---

## Authentication

### Register — `POST /api/auth/register`

Request body:

| Field    | Type   | Required | Notes             |
|----------|--------|----------|-------------------|
| name     | string | ✅       | Full name         |
| email    | string | ✅       | Valid email format|
| password | string | ✅       | Min. 6 characters |


---

### Login — `POST /api/auth/login`

Request body:

| Field    | Type   | Required |
|----------|--------|----------|
| email    | string | ✅       |
| password | string | ✅       |



> Use the returned `token` as a Bearer token in the `Authorization` header for protected routes:
> ```
> Authorization: Bearer <token>
> ```

---

## Project Structure

```
backend/src/
├── config/         # Database connection
├── controllers/    # Route handlers
├── middleware/     # Auth middleware
├── models/         # Mongoose schemas
├── routes/         # Express routers
├── index.ts        # Entry point
└── seed.ts         # Sample data seeder
```