# 💳 LotiCredit – Credit Bureau Management System

LotiCredit is a full-stack **Credit Bureau Management System** built with **React.js**, **Express.js**, **Node.js**, **MongoDB**, **Tailwind CSS**, and **Framer Motion**. The system helps lenders assess creditworthiness by providing access to consumer credit data such as previous loan behavior, repayment history, and risk profiles.

---

## 🎯 Project Objective

The goal of this project is to give students real-world experience in designing, developing, and maintaining a NoSQL-based application. This includes:

- Conceptual and logical system design.
- Backend development with Node.js, Express.js, and MongoDB.
- Frontend development with React.js and Tailwind CSS.
- Enhancing user experience with animation (Framer Motion).

The system allows credit bureaus to collect, store, and share consumer credit information with lenders, enabling smarter decisions when approving loans or setting interest rates.

---

## 🚀 Tech Stack

| Layer     | Technology             |
|-----------|------------------------|
| Frontend  | React.js, Tailwind CSS, Framer Motion |
| Backend   | Node.js, Express.js    |
| Database  | MongoDB                |
| Auth & API| JWT Authentication, RESTful API |

---

## 📂 Project Structure

loticredit/
├── client/ # React frontend
├── server/ # Express backend
├── .env # Environment variables (not committed)
└── README.md # Project documentation



---

## 🛠️ Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/kamohelomokhethi137/loticredit.git
cd loticredit
cd server
npm install


PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:3000
npm run dev
cd ../client
npm install
VITE_API_URL=http://localhost:5000/api


```

🔐 Features
✅ User authentication with email verification

✅ Role-based access: Lender, Consumer, Admin

✅ Lender dashboard: View credit histories, risk profiles

✅ Consumer dashboard: View personal credit activity

✅ Responsive and modern UI (Tailwind CSS)

✅ Smooth page transitions and animations (Framer Motion)

✅ REST API with secure route
