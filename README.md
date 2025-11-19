🚀 Task Management Backend – Node.js, Express, MongoDB, JWT

A scalable and security-focused backend application built as part of a technical assignment.
Provides user authentication, role-based authorization, task CRUD operations, and integration with MongoDB Atlas.
The application is deployed on AWS Elastic Beanstalk.

🏗 Tech Stack

Node.js / Express.js

MongoDB Atlas

Mongoose

JWT Authentication

BCrypt

AWS Elastic Beanstalk

Swagger Documentation

📌 Core Features
✔ User Authentication

Register

Login

Password hashing

✔ Authorization

JWT-based access control

Role-based access (user/admin)

Protected routes

✔ Task Management

Create task

Read tasks

Update task

Delete task

Mark task as completed

✔ Admin Features

Admin-only route

Access control middleware

✔ Deployment

Fully deployed on AWS Elastic Beanstalk

Environment properties configured using EB dashboard

MongoDB Atlas cloud database

🗂 Project Structure
backend/
│
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── modules/
│   │   ├── auth/
│   │   └── entity/
│   ├── docs/
│   ├── app.js
│   └── server.js
│
├── .ebextensions/
│   └── node.config
│
├── package.json
├── .gitignore
└── README.md

🔧 Environment Variables

Create a .env file locally (this file is NOT uploaded to GitHub):

PORT=5000
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d


On AWS Elastic Beanstalk, add the same keys under:
Configuration → Software → Environment Properties

🚀 Running Locally
1. Install dependencies
npm install

2. Start backend
npm run dev

3. Access application
http://localhost:5000/

🔐 Authentication Workflow

On login, the server issues a signed JWT containing:

user ID

email

role

Client must send token using:

Authorization: Bearer <token>


Middleware validates token and grants access.

📘 Swagger Documentation

Available at:

/api-docs


Shows all routes:

Auth routes

Task routes

Admin-only route

🌐 Live Deployment (AWS Elastic Beanstalk)

Your EB URL goes here:

https://your-environment-url.elasticbeanstalk.com

📬 API Endpoints
Auth
Method	Endpoint	Description
POST	/api/v1/auth/register	Register new user
POST	/api/v1/auth/login	Login user
Tasks
Method	Endpoint	Description
GET	/api/v1/tasks	Get all tasks of logged-in user
POST	/api/v1/tasks	Create task
PUT	/api/v1/tasks/:id	Update task
DELETE	/api/v1/tasks/:id	Delete task
Admin
Method	Endpoint	Description
GET	/api/v1/auth/admin-only	Admin testing route
🛡 Middleware

authenticate → verifies JWT

authorize(role) → blocks unauthorized roles

errorHandler → centralized error shaping

📎 Deployment Notes

Uses .ebextensions/node.config for Node version

Env variables configured in EB dashboard

MongoDB Atlas connection handled via process.env.MONGO_URI

Logging enabled for debugging

🎯 Assignment Compliance

This backend meets all specified requirements:

Auth

JWT

RBAC

CRUD

MongoDB

Swagger

Error handling

Deployment

Clean modular architecture