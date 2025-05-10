🧠 TaskVault – Multi-Tenant ERP-Style Issue Tracker
A powerful, scalable issue-tracking system built for modern organizations, supporting multi-tenancy, role-based access, real-time updates, and rich analytics.

🚀 Overview
TaskVault is a web-based issue tracking system designed to handle multiple departments or clients under one unified system. Built using Spring Boot, PostgreSQL, and React.js, it provides a secure, scalable solution with role-based access control, real-time notifications, and analytics for efficient issue resolution.

🎯 Problem Statement
Traditional issue trackers often fall short for organizations with complex structures:

❌ Single-tenant limitations

❌ Poor role-based access control

❌ Limited scalability and analytics

TaskVault solves this by offering a multi-tenant architecture, structured user roles (Admin, Manager, Employee), and responsive dashboards.

🧩 Core Features
🔐 Role-Based Access Control (RBAC) – Secure permissions per user role

🏢 Multi-Tenant Support – Isolated data per organization

🧾 Issue Management – Create, prioritize, assign, and resolve issues

📊 Admin Dashboard – Visualize issue stats and team activity

🔔 Real-Time Notifications – Stay updated on changes and escalations

📱 Responsive Design – Optimized for web and mobile

📈 Analytics & Reports – Track trends, resolution times, and performance

🛠️ Technology Stack
🔙 Backend
Node JS

PostgreSQL (Multi-tenant database)

JWT (Authentication & security)

🔜 Frontend
React.js (SPA with routing and dynamic pages)

TailwindCSS & ShadCN (Modern, accessible UI)

🧪 Testing
JUnit & Mockito (Backend tests)

Jest & React Testing Library (Frontend tests)

🧱 Database Schema
users – Stores user details with roles and organization ID

organizations – Org-specific metadata

issues – Issue tracker with priority, status, and ownership

📌 Key Modules
User Authentication (JWT-based)

Organization Switching

Issue Lifecycle Management

Notifications and Alerts

Admin Controls and Analytics

📅 Development Plan
🔹 Phase 1 – Backend
Spring Boot APIs

PostgreSQL schema

JWT auth + org filtering

🔹 Phase 2 – Frontend
React dashboard

Role-based navigation

Tailwind & ShadCN styling

🔹 Phase 3 – Integration
Connect frontend to backend

JWT handling in localStorage

Protected routes

🔹 Final Phase – Add-ons
Auto-assignment of engineers

Admin stats and reports

📌 Future Enhancements
📱 Mobile app (React Native)

🤖 AI for issue prioritization

📂 ERP module integration (HR, Finance)

## 📦 How to Run the Project Locally
npm run dev

