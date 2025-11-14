# Google Calendar Clone — Fullstack Project

A high-fidelity, full-stack clone of Google Calendar built for the Computer Use Tutor assignment.  
The project focuses on delivering smooth UI interactions, clean architecture, and correctly implemented backend APIs for event management.

## 🚀 Tech Stack

### Frontend
- React + Vite
- Tailwind CSS v4
- FullCalendar v6
- Axios

### Backend
- Node.js + Express
- MongoDB + Mongoose

---

## 🔧 Setup & Run Instructions

### 1. Backend Setup
```
cd server
npm install
```

Create `.env`:
```
MONGO_URI=mongodb://127.0.0.1:27017
DB_NAME=googleCalendarClone
PORT=5000
CORS_ORIGIN=http://localhost:5173
```

Run backend:
```
npm run dev
```

### 2. Frontend Setup
```
cd client
npm install
```

Create `.env`:
```
VITE_API_BASE_URL=http://localhost:5000/api
```

Run frontend:
```
npm run dev
```

---

## 🏗️ Architecture Overview

### Frontend Structure
```
/src
 ├── components/
 ├── api/
 ├── index.css
 └── App.jsx
```

### Backend Structure
```
/src
 ├── config/
 ├── controllers/
 ├── routes/
 └── models/
```

---

## 🧠 Business Logic & Edge Cases

- Handles all-day and timed events.
- Fetches events only for visible date ranges.
- Supports drag, drop, resize.
- Supports delete and basic edit.
- Recurring event fields exist in schema for future upgrades.
- Overlap conflicts not enforced (like Google Calendar behavior).

---

## 🎨 Animations & Interactions

- Sidebar slide animation (Tailwind transitions)
- Dropdown view selector with rotate animation
- FullCalendar drag & drop / resize interactions
- Smooth navbar date updates

---

## 🔮 Future Enhancements

- Full event modal with description, color, labels
- Recurring event logic
- Authentication (JWT)
- Collaborative sharing
- Mobile-first redesign

---

## ✅ Final Notes

Ensure MongoDB is running locally and both servers are started.  
API base URL and CORS must match environment.
