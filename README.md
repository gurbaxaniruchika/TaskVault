# 🧠 TaskVault – Scalable Multi-Tenant Issue Tracker

A powerful, ERP-style issue-tracking system tailored for modern organizations. TaskVault supports **multi-tenancy**, **role-based access**, **real-time updates**, and **rich analytics** to streamline issue resolution across diverse teams and departments.

---

## 🚀 Overview

**TaskVault** is a web-based, full-stack issue tracker built with **PostgreSQL**, **Node.js**, and **React.js**. It is designed for organizations managing multiple clients or departments under one platform, delivering secure, scalable, and insightful tracking capabilities.

---

## 🎯 Problem Statement

Traditional issue-tracking tools often fall short when scaling across departments or client teams:

- ❌ Single-tenant limitations  
- ❌ Weak role-based access control  
- ❌ Limited analytics and scalability

**TaskVault** addresses these challenges with:

- 🏢 Multi-tenant architecture  
- 🔐 Structured user roles (Admin, Manager, Employee)  
- 📊 Responsive dashboards and analytics

---

## 🧩 Core Features

- 🔐 **Role-Based Access Control (RBAC)** – Secure, role-specific permissions  
- 🏢 **Multi-Tenant Support** – Isolated data per organization/client  
- 🧾 **Comprehensive Issue Management** – Create, prioritize, assign, resolve  
- 📊 **Admin Dashboard** – Visualize issue metrics and team activity  
- 🔔 **Real-Time Notifications** – Stay instantly updated  
- 📱 **Responsive UI** – Optimized for desktop and mobile  
- 📈 **Analytics & Reports** – Track trends, SLA adherence, and performance  

---

## 🛠️ Technology Stack

### 🔙 Backend

- **Node.js**
- **PostgreSQL** (multi-tenant schema)
- **Clerk** – Authentication and security

### 🔜 Frontend

- **React.js** – SPA with dynamic routing
- **Tailwind CSS** & **ShadCN** – Modern, accessible UI components

---

## 🧱 Database Schema Overview

| Table           | Description                                |
|------------------|--------------------------------------------|
| `users`          | User data, roles, and organization linkage |
| `organizations`  | Organization-specific metadata             |
| `issues`         | Issue records with status, priority, and ownership |

---

## 📌 Key Modules

- ✅ User Authentication (Clerk)  
- 🔄 Organization Switching  
- 🔧 Issue Lifecycle Management  
- 🔔 Notifications & Alerts  
- 📊 Admin Controls & Analytics

---

## 📅 Development Roadmap

### Phase 1 – Backend

- PostgreSQL multi-tenant schema  
- Organization filtering via Clerk  

### Phase 2 – Frontend

- React dashboard setup  
- Role-based navigation  
- Tailwind CSS & ShadCN styling  

### Phase 3 – Integration

- API integration  
- Protected routes & session handling  

### Final Phase – Add-ons

- Auto-assignment of engineers  
- Admin statistics & reporting tools  

---

## 🔮 Future Enhancements

- 📱 Mobile App (React Native)  
- 🤖 AI-based Issue Prioritization  
- 📂 ERP Module Integration (HR, Finance, etc.)  

---

## 📄 Environment Variables

Create a `.env` file in the root directory with the following keys:

```env
DATABASE_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
```

---

## 💻 Running the Project Locally

To run TaskVault locally, follow these steps:

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/taskvault.git
   cd taskvault
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Set up environment variables**  
   Create a `.env` file in the root folder and add all required variables listed above.

4. **Run the development server**  
   ```bash
   npm run dev
   ```

5. Visit `http://localhost:3000` to start using the application.

---

## 🤝 Contributing

We welcome contributions to **TaskVault**! To contribute:

1. Fork the repository  
2. Create a new branch (`git checkout -b feature-name`)  
3. Commit your changes (`git commit -m "Add feature"`)  
4. Push to the branch (`git push origin feature-name`)  
5. Create a Pull Request

Feel free to open issues for suggestions or bugs. Let's build something great together!

---
