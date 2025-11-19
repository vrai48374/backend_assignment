🚀 Task Management Backend — Node.js, Express, MongoDB, JWT

A production-grade backend service delivering user authentication, role-based authorization, and complete task lifecycle management. The system is designed for cloud deployment and integrates tightly with MongoDB Atlas, JWT security, modular routing, and enterprise-aligned engineering standards.

🔧 Technology Stack

Node.js + Express.js

MongoDB Atlas + Mongoose

JWT Authentication

BCrypt Password Hashing

AWS Elastic Beanstalk (Deployment)

Swagger UI (API Documentation)

🎯 Solution Capabilities
User Authentication & Security

New user registration

Secure login

Encrypted passwords

JWT-based session handling

Role-Based Authorization

User & Admin role segregation

Admin-restricted endpoint

Authorization middleware

Task Lifecycle Management

Create tasks

Get all tasks for logged-in user

Update tasks

Delete tasks

Mark tasks as completed

Operational Features

Centralized error handling

Clean modular architecture

Environment-based configuration

Full deployment on AWS

📁 Project Structure
backend/
│
├── src/
│   ├── config/        # Database connection
│   ├── controllers/   # Business logic
│   ├── middlewares/   # Auth & error handling
│   ├── models/        # Mongoose schemas
│   ├── modules/       # Auth & Task modules
│   ├── docs/          # Swagger configuration
│   ├── app.js
│   └── server.js
│
├── .ebextensions/
│   └── node.config    # EB runtime config
│
├── package.json
├── .gitignore
└── README.md
