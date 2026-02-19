# Product App — Full Stack

## Stack
- **Backend**: Node.js + Express + TypeScript + MongoDB


## Features

- ✅ Product listing with search & filter
- ✅ Responsive product card UI
- ✅ Add to cart / favorite
- ✅ User authentication (register/login)
- ✅ Full CRUD REST API
- ✅ Loading skeletons & error handling

### Prerequisites
- Node.js >= 18
- MongoDB running locally (or MongoDB Atlas URI)

### Backend
cd backend

cp .env.example .env   # Fill MongoDB URI and JWT secret

npm install

npm run seed           # Seed sample data

npm run dev            # Run at http://localhost:5000


## API Endpoints
| Method | Endpoint          | Auth Required |
|--------|-------------------|---------------|
| GET    | /api/products     | No            |
| GET    | /api/products/:id | No            |
| POST   | /api/products     | Yes (JWT)     |
| PUT    | /api/products/:id | Yes (JWT)     |
| DELETE | /api/products/:id | Yes (JWT)     |
| POST   | /api/auth/register| No            |
| POST   | /api/auth/login   | No            |

## Live server
https://product-app-backend-9dso.onrender.com