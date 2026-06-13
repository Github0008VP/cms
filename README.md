# Custom Content Management System

A full-stack MERN application built to manage portfolio projects through a secure admin dashboard. It includes a public-facing frontend for showcasing projects and a protected admin area for creating, editing, and managing portfolio content.

## Overview

This project was built as a practical full-stack portfolio CMS using React on the frontend and a Node.js/Express backend with MongoDB. The application uses JWT-based authentication with secure cookies for protected admin access, and the deployment setup separates frontend and backend across different services and subdomains.

## Features

- Public portfolio/project listing interface
- Protected admin dashboard
- Admin login with JWT authentication
- Secure cookie-based session handling
- Create, edit, and delete project entries
- View and manage admin-facing project content
- Route protection for dashboard access
- Separate frontend and backend deployment with custom domain/subdomain setup

## Tech Stack

### Frontend
- React
- React Router
- Axios

### Backend
- Node.js
- Express.js
- JWT authentication middleware

### Database
- MongoDB
- Mongoose

### Deployment
- Vercel for frontend deployment
- Render for backend deployment
- Custom domain and subdomain configuration

## Project Structure

```bash
frontend/
├── src/
│   ├── components/
│   │   ├── ProjectCard.jsx
│   │   └── ProtectedRoute.jsx
│   ├── pages/
│   │   ├── Admin.jsx
│   │   ├── AdminLogin.jsx
│   │   ├── AdminProjectCreate.jsx
│   │   ├── Contact.jsx
│   │   ├── EditPage.jsx
│   │   └── Project.jsx
│   └── App.jsx

backend/
├── middleware/
│   └── auth.middleware.js
└── ...
```

## Authentication Flow

1. Admin logs in from the frontend.
2. Backend verifies credentials and issues a JWT.
3. JWT is stored in a secure cookie.
4. Protected routes check authentication before allowing access.
5. Admin can then manage project content from the dashboard.

## Highlights

- Built a real-world admin workflow instead of a static CRUD demo
- Worked with protected routes and authenticated dashboard access
- Handled frontend/backend deployment separately
- Dealt with production issues such as CORS, cookies, and cross-subdomain configuration
- Improved the admin dashboard UI for a cleaner and more professional experience

## Why this project matters

This project demonstrates practical full-stack development skills beyond just local CRUD operations. It shows experience with authentication, deployment, admin workflows, route protection, and real production debugging.

## Possible Improvements

- Role-based access control for super admin and admin users
- Project ownership/assignment support
- Search and filter in admin dashboard
- Image upload support for projects
- Better analytics or activity tracking in the dashboard
- Pagination for projects and messages

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd <your-repo-folder>
```

### 2. Install dependencies

For frontend:

```bash
cd frontend
npm install
```

For backend:

```bash
cd backend
npm install
```

### 3. Set environment variables

Create a `.env` file in the backend and add values such as:

```env
MONGO_URI=your_mongodb_connection_string
JWTSECRET=your_jwt_secret
```

For the frontend, configure:

```env
VITE_API_URL=your_backend_url
```

### 4. Run locally

Backend:

```bash
npm run dev
```

Frontend:

```bash
npm run dev
```

## Screens and Pages

- Public projects page
- Admin login page
- Admin dashboard
- Create project page
- Edit project page
- Contact page

## Author

**Vishavpreet Singh**  
MERN stack developer.
