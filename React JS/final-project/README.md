# 🧠 Final Project - Role-Based Post Management Web App 🚀

Welcome to the **React Role-Based Post Management System**! This is a modern, responsive, and interactive front-end project built using **React JS** and **CSS**. The application allows users to explore posts and admins to create and manage their own posts using localStorage, with authentication and role-based access built in. 🎯

---

## 🌐 Live Demo

🔗 Link to Live Demo: (coming soon)

---

## 📚 Tech Stack

- ⚛️ **React JS (Create React App)**
- 🎨 **CSS**
- 📦 **localStorage** for data persistence
- 🌐 **JSONPlaceholder API** (https://jsonplaceholder.typicode.com)
- 🔐 **Custom Role-based Authentication**

---

## 🧰 Features

### 🔐 Authentication System

- Login with:
  - Username
  - Mobile number
  - OTP (Random 4-digit)
  - Select role: `Admin` or `User`
- Stores auth data in localStorage
- Role-based access (Admin vs User)

### 🏠 Home Page (`/`)

- **Created Posts** (By Admin):

  - Posts created by admin stored in `localStorage`
  - Editable & Deletable (only for Admins)
  - Clickable post cards for details view

- **Explore Posts** (Fetched from API):
  - First 10 posts from `JSONPlaceholder`
  - Non-clickable cards with fallback image
  - Real-time Search/Filter by Title

### ✍️ Create Post Page (`/create-post`)

- Accessible **only** to `Admin`
- Form to create new post with:
  - Title
  - Description
  - Image URL
- Random `postId` generation
- Saves post data to `localStorage`

### 🔍 Post Detail Page (`/posts/:postId`)

- Shows full post details
- **Edit** and **Delete** options for Admin
- Modal popup for editing post

### 📦 Data Management

- All created posts are stored in `localStorage`
- Posts persist even after logout
- JSON methods `JSON.stringify()` and `JSON.parse()` used

### 🔁 Logout Functionality

- Common `Header` with:
  - Project Logo (top-left)
  - Navigation tabs (Home, Create Post)
  - Logout button (top-right)
- Clicking logout opens a **confirmation modal** with:
  - `Logout`
  - `Cancel`

---

## 👨‍💻 Author

Made with ❤️ by **Milan Koradiya**  
[GitHub Profile](https://github.com/koradiyamilan12)

---

## 📄 License

This project is licensed under the **MIT License**.
