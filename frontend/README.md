# 🚗 KINETIQ Frontend

> **Intelligence in Motion**
>
> Modern AI-powered Driver Behaviour Monitoring Dashboard

---

## 📖 Overview

The KINETIQ Frontend is a modern, responsive web application that serves as the visual interface for the AI-powered Driver Behaviour Monitoring System.

Built using React and Vite, the frontend provides an intuitive dashboard for monitoring live driving sessions, visualizing behavioural analytics, managing driver profiles, viewing historical reports, and interacting with the backend through secure REST APIs.

Designed with performance, usability, and scalability in mind, KINETIQ delivers a seamless user experience while presenting real-time driver intelligence in an elegant and professional interface.

---

# ✨ Key Features

### 🔐 Authentication System

* Secure User Registration
* Secure Login
* JWT-based Session Management
* Protected Routes
* Persistent User Sessions

### 🏠 Dashboard

* Driver Overview
* Live System Status
* Active Monitoring Summary
* Personalized Welcome Screen
* Animated Navigation

### 📷 Live Monitoring

* Live Camera Feed
* Real-Time Driver Monitoring
* Driver Behaviour Tracking
* Instant Alert Display
* Session Control Interface

### 📊 Analytics Dashboard

Interactive visualization of:

* Driver Attention Score
* Fatigue Score
* Risk Score
* Blink Rate
* Behaviour Fingerprint
* Historical Driver Performance

### 📑 Reports

* Driving Session History
* Performance Reports
* Behaviour Summary
* Monitoring Statistics
* Historical Analytics

### 👤 Driver Profile

* View Driver Information
* Update Personal Details
* Backend Synchronization
* Secure Profile Management

### 🎨 User Experience

* Fully Responsive Layout
* Professional Dashboard UI
* Animated Components
* Live Status Ticker
* Modern Dark Theme
* Smooth Page Transitions

---

# 🏗 Frontend Architecture

```text
                    React + Vite
                         │
                         ▼
                  React Router DOM
                         │
        ┌────────────────┼────────────────┐
        │                │                │
        ▼                ▼                ▼
 Dashboard         Monitoring        Analytics
        │                │                │
        └────────────────┼────────────────┘
                         │
                   Axios API Layer
                         │
                         ▼
                   FastAPI Backend
                         │
                         ▼
                     PostgreSQL
```

---

# 🔄 Frontend Flow

```text
User Login
      │
      ▼
Authentication
      │
      ▼
Dashboard
      │
      ├─────────────┐
      ▼             ▼
Monitoring      Analytics
      │             │
      ▼             ▼
Reports       Driver Profile
      │             │
      └───────┬─────┘
              ▼
      Backend Synchronization
```

---

# 🎨 UI Workflow

```text
User Interaction
        │
        ▼
React Components
        │
        ▼
State Management
        │
        ▼
API Communication
        │
        ▼
Backend Response
        │
        ▼
Dynamic UI Update
```

---

# 🛠 Tech Stack

## Frontend Framework

* React.js
* Vite

## Styling

* Tailwind CSS
* CSS3

## Routing

* React Router DOM

## HTTP Client

* Axios

## Animations

* Framer Motion

## Icons

* Lucide React

## State Management

* React Hooks
* Context API

---

# 📂 Project Structure

```text
frontend
│
├── public
│
├── src
│   ├── assets
│   ├── components
│   ├── layouts
│   ├── pages
│   ├── routes
│   ├── services
│   ├── hooks
│   ├── utils
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

# 📡 Frontend Modules

## Authentication

* Login Page
* Registration Page
* Route Protection

---

## Dashboard

* Driver Overview
* Quick Statistics
* Live Status
* Navigation

---

## Monitoring

* Camera Feed
* Driver Behaviour Detection
* Session Controls

---

## Analytics

* Behaviour Charts
* Fingerprint Analysis
* Driver Performance

---

## Reports

* Historical Sessions
* Report Generation
* Driver Statistics

---

## Profile

* Driver Information
* Account Details
* Profile Updates

---

# 🚀 Running Locally

## Clone Repository

```bash
git clone https://github.com/<your-username>/KinetIQ.git
cd KinetIQ/frontend
```

## Install Dependencies

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

Application will be available at

```text
http://localhost:5173
```

---

# 🔗 Backend Integration

The frontend communicates with the FastAPI backend using REST APIs for:

* Authentication
* Driver Monitoring
* Behaviour Analytics
* Reports
* Profile Management
* Session Tracking

---

# 🎯 Future Enhancements

* Light/Dark Theme Support
* Progressive Web App
* Offline Dashboard
* Mobile Responsive Optimizations
* Voice Assistant
* Real-Time Notifications
* Fleet Dashboard
* Multi-Driver Management

---

# 👥 Team

**Project:** KINETIQ – Intelligence in Motion

> Delivering intelligent interfaces that transform driver behaviour data into meaningful insights.