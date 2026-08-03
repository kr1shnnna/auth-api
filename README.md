# 🔐 User Registration API

A simple REST API built with **Node.js**, **Express.js**, and **MongoDB** that allows users to register securely. The API validates user input and stores passwords in a hashed format using **bcrypt**.

---

## 🚀 Features

* ✅ User Registration
* ✅ Password Hashing with bcrypt
* ✅ Input Validation
* ✅ MongoDB Database Integration
* ✅ Error Handling
* ✅ RESTful API Design

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* bcrypt
* express-validator
* dotenv

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/auth-api.git
```

Move into the project folder

```bash
cd auth-api
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=3000

MONGODB_URI=your_mongodb_connection_string
```

Start the server

```bash
npm start
```

For development

```bash
npm run dev
```

---

## 📌 API Endpoint

### Register User

**POST** `/register`

#### Request Body

```json
{
  "name": "Krishna",
  "email": "krishna@example.com",
  "password": "password123"
}
```

#### Success Response

```json
{
  "message": "User registered successfully"
}
```

---

## 🔒 Security Features

* Password hashing using **bcrypt**
* Request validation using **express-validator**
* Environment variables with **dotenv**

---

## 📖 Learning Objectives

This project helped me understand:

* REST API development with Express.js
* MongoDB and Mongoose
* Password hashing with bcrypt
* Input validation
* Error handling
* Environment variable management

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Krishna**

Engineering Student | MERN Stack Learner

If you found this project helpful, don't forget to ⭐ the repository!
