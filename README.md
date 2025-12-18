# 🌱 Digital Life Lessons

**Live Site:** [https://simple-firebase-authenti-5320e.web.app/](https://simple-firebase-authenti-5320e.web.app/)
<!-- **Client Repository:** [https://github.com/your-username/digital-life-lessons-client](https://github.com/your-username/digital-life-lessons-client)
**Server Repository:** [https://github.com/your-username/digital-life-lessons-server](https://github.com/your-username/digital-life-lessons-server) -->

---

## 📖 Project Overview

**Digital Life Lessons** is a full‑stack web platform where users can create, preserve, and share meaningful life lessons, personal growth insights, and wisdom gathered from real experiences. The platform encourages reflection, community learning, and mindful growth through structured lesson creation, engagement, and discovery.

Users can manage private lessons, share public wisdom, save favorites, react and comment, and upgrade to a **Premium** plan to unlock advanced features and exclusive content.

---

## ✨ Key Features

* 🔐 **Authentication** with Email/Password and Google (Firebase Auth)
* 🧠 **Create & Manage Life Lessons** with category, emotional tone, privacy, and access level
* 🌍 **Public Lesson Browsing** with search, filter, sort, and pagination
* ⭐ **Favorites & Reactions** (Like, Save, Comment, Share)
* 💎 **Premium Membership System** with Stripe Checkout (৳1500 lifetime)
* 🛡️ **Role‑Based Dashboards** for Users and Admins
* 🚨 **Lesson Reporting & Moderation** for community safety
* 📊 **Analytics & Insights** for users and admins
* 🎨 **Professional, Responsive UI** with consistent spacing and design

---

## 🧩 Tech Stack

### Frontend

* React.js
* React Router
* Tailwind CSS + DaisyUI
* TanStack Query
* Firebase Authentication
* Lottie React
* Stripe.js

### Backend

* Node.js
* Express.js
* MongoDB
* Firebase Admin SDK (Token Verification)
* Stripe (Test Mode)

---

## 🧭 Application Structure

### Public Pages

* Home
* Public Lessons
* Login / Register
* 404 Not Found

### Protected Pages

* Lesson Details
* Add Lesson
* My Lessons
* Update Lesson
* Favorites
* Pricing / Upgrade
* Payment Success & Cancel
* User Dashboard
* Admin Dashboard

---

## 🏠 Home Page Highlights

* 🎞️ Hero Slider with meaningful life content
* 🌟 Featured Life Lessons (Admin Controlled)
* ❤️ Why Learning From Life Matters (4 Benefit Cards)
* 🏆 Top Contributors of the Week (Dynamic)
* 🔖 Most Saved Lessons (Dynamic)

---

## 💳 Pricing & Premium Access

**Free Plan**

* View all public free lessons
* Create free lessons
* Save and like lessons

**Premium Plan (৳1500 – Lifetime)**

* Create premium lessons
* Access premium public lessons
* Ad‑free experience
* Priority lesson visibility
* Premium badge

Stripe Checkout is integrated securely, and user premium status is always verified from MongoDB as the single source of truth.

---

## 📚 Life Lesson Features

* Title, full description, category, emotional tone
* Optional image upload
* Public / Private visibility
* Free / Premium access control
* Estimated reading time
* Author profile section
* Reactions, favorites, comments, and social sharing
* Similar & recommended lessons

---

## 📊 Dashboard System

### User Dashboard

* Overview & analytics
* Add / Update / Delete lessons
* Manage favorites
* Profile management
* Premium status indicator

### Admin Dashboard

* Platform analytics
* Manage users & roles
* Manage lessons
* Review reported content
* Feature lessons

---

## 🔍 Search, Filter & Pagination

* Search lessons by title or keywords
* Filter by category and emotional tone
* Sort by newest or most saved
* One‑page pagination for public lessons

---

## 🔐 Security & Best Practices

* Firebase Admin SDK token verification on protected routes
* Environment variables for Firebase & MongoDB credentials
* Role‑based access control
* Only owners or admins can modify lessons
* Reload‑safe routes with no CORS or 404 issues

---

## 🎨 UI & UX Principles

* Unique, non‑repetitive design
* Consistent typography, buttons, and spacing
* Equal‑height cards and grid layouts
* Responsive for mobile, tablet, and desktop
* Modern icons (New X logo)
* Toast/SweetAlert for all feedback messages

---

## 🚀 Deployment

* Client and server deployed separately
* Firebase authorized domains configured
* Stripe webhooks configured
* No reload redirect to login for authenticated users

---

## 🛠️ GitHub Commit Requirements

* ✅ Minimum **20 meaningful commits** on the client side
* ✅ Minimum **12 meaningful commits** on the server side

---

## 📌 Resources Used

* [https://uiverse.io/](https://uiverse.io/)
* [https://devmeetsdevs.com/](https://devmeetsdevs.com/)
* [https://bootcamp.uxdesign.cc/](https://bootcamp.uxdesign.cc/)
* [https://themeforest.net/](https://themeforest.net/)
* [https://codecanyon.net/](https://codecanyon.net/)

---

## 👨‍💻 Author

**Digital Life Lessons** — Built as a full‑stack project to demonstrate creativity, problem‑solving, clean architecture, and production‑ready deployment.

> "Preserve wisdom. Reflect deeply. Grow together." 🌱
