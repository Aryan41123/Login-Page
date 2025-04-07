# 🔐 Login Page – Frontend

This is the frontend of a secure login system built using **React**, **TypeScript**, **React Hook Form**, **Zod**, and **React Query**. The UI follows a clean design and handles validation, API integration, and error/success messaging.

## 🚀 Tech Stack

- **React** (with TypeScript)
- **React Hook Form** – for form management
- **Zod** – for schema-based form validation
- **React Query** – for API interactions and caching
- **Axios** – for HTTP requests
- **CSS Modules** – for styling

---

## 📁 Project Structure
src/
│
├── components/
│   ├── LoginForm.tsx
│   └── LoginForm.module.css     ← CSS styles here
│
├── hooks/
│   └── useLogin.ts
│
├── lib/
│   ├── schema.ts
│   └── api.ts
│
├── types/
│   └── auth.ts
│
├── App.tsx
└── main.tsx

---

## 🧩 Features

- ✅ Client-side validation with **Zod** (e.g., required fields, min length)
- ✅ Displays field-specific and server-side error messages
- ✅ Handles API requests using **React Query**
- ✅ Green success message visible for 3 seconds after login
- ✅ Clean, centered form layout with responsive design

---

## 🛠️ Installation

bash
git clone https://github.com/Aryan41123/Login-Page.git
cd Login-Page
npm install

# 🔐 Login Auth Backend

A secure and minimal backend authentication system built with **Node.js**, **TypeScript**, **Express**, **Prisma**, and **MongoDB**. It allows users to register and login with password hashing using `bcrypt`. Built with scalability, type safety, and clean architecture in mind.

---

## 📘 Project Specification

### 🧩 Overview

This project handles user authentication for a full-stack application. It includes:

- ✅ User registration
- ✅ User login
- ✅ Password hashing with `bcrypt`
- ✅ MongoDB database connection using Prisma
- ✅ Type-safe code with TypeScript

---

### 🔧 Features

- 📥 Register a new user
- 🔐 Login with email and password
- 🔒 Passwords hashed using `bcrypt`
- 🧠 Typed API responses and requests
- 📦 Prisma ORM for working with MongoDB
- 🧱 Modular, maintainable code structure

---

### 🛠️ Tech Stack

| Layer         | Technology           |
|---------------|----------------------|
| Server        | Node.js + Express    |
| Language      | TypeScript           |
| ORM           | Prisma               |
| Database      | MongoDB (Atlas)      |
| Auth          | Bcrypt               |
| Dev Tools     | ts-node-dev, Prisma CLI |
| Validation    | (Zod – optional)     |

---

## 🗂️ Project Structure

---

## 🧬 Database Schema (Prisma)
backend/
│
├── prisma/
│   └── schema.prisma
│
├── src/
│   ├── controllers/
│   │   ├── authController.ts
│   │   └── userController.ts
│   ├── middleware/
│   │   └── authMiddleware.ts
│   ├── routes/
│   │   ├── authRoutes.ts
│   │   ├── userRoutes.ts
│   │   └── protectedRoutes.ts
│   ├── prisma/
│   │   └── client.ts
│   ├── index.ts
│
├── .env
├── package.json
├── tsconfig.json




```prisma
model User {
  id       String @id @default(auto()) @map("_id") @db.ObjectId
  name     String
  email    String @unique
  password String

  @@map("Login_Auth") // Collection name in MongoDB
}





