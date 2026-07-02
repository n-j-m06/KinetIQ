# 🚗 KINETIQ

> **Intelligence in Motion**
>
> AI-powered Personalized Driver Behaviour Intelligence System

---

## 📖 Overview

KINETIQ is an intelligent Driver Behaviour Monitoring platform that combines Artificial Intelligence, Computer Vision, and Real-Time Analytics to enhance road safety through continuous driver behaviour analysis.

Unlike traditional Driver Monitoring Systems (DMS) that rely on predefined thresholds, KINETIQ builds a personalized **Driver Behaviour Fingerprint** for every driver by learning their unique driving characteristics over time. The system continuously monitors behavioural metrics, detects anomalies, generates intelligent alerts, and provides actionable insights through an interactive analytics dashboard.

Built with a modern full-stack architecture, KINETIQ integrates a React frontend, FastAPI backend, PostgreSQL database, and AI-powered behaviour analysis to deliver a scalable, secure, and intuitive monitoring solution.

---

# ✨ Key Features

### 🔐 Authentication & Security

* Secure User Registration
* JWT Authentication
* Protected Routes
* Password Encryption using BCrypt
* Session Persistence
* Role-Based API Protection

### 👤 Driver Profile Management

* Personalized Driver Profile
* Profile Updates
* Driver Information Dashboard
* Behaviour Profile Association
* Secure Account Management

### 🚘 Driver Monitoring

* Live Driver Monitoring
* Session Management
* Behaviour Tracking
* Continuous Driver Observation
* Real-Time Monitoring Interface

### 🧠 AI Behaviour Intelligence

Real-time analysis of:

* Driver Attention
* Blink Rate
* Fatigue Level
* Risk Score
* Mobile Phone Detection
* Behaviour Fingerprinting

### 🚨 Intelligent Alert System

Automatic detection of:

* Driver Fatigue
* Driver Distraction
* Unsafe Driving Behaviour
* Mobile Phone Usage
* High Risk Events

### 📊 Analytics Dashboard

Interactive visualization of:

* Driver Behaviour Trends
* Attention Analytics
* Fatigue Analytics
* Risk Analysis
* Behaviour Fingerprints
* Session Statistics

### 📑 Reports & Insights

* Driving History
* Session Reports
* Behaviour Summary
* Driver Performance Reports
* Historical Analytics

### ⚡ Real-Time Communication

* REST API Integration
* WebSocket Communication
* Live Dashboard Updates
* Instant Behaviour Streaming

---

# 🏗 System Architecture

```text
                   React + Vite Frontend
                           │
                           ▼
                    Authentication Layer
                           │
                           ▼
                    FastAPI REST APIs
                           │
      ┌────────────────────┼────────────────────┐
      │                    │                    │
      ▼                    ▼                    ▼
 Driver Profiles     Monitoring Engine    Analytics Engine
      │                    │                    │
      └────────────────────┼────────────────────┘
                           ▼
               Behaviour Fingerprint Engine
                           │
                           ▼
                 PostgreSQL Database (Neon)
                           │
                           ▼
                WebSocket Live Communication
```

---

# 🔄 System Workflow

```text
User Registration
        │
        ▼
Secure Authentication
        │
        ▼
Driver Profile Creation
        │
        ▼
Start Monitoring Session
        │
        ▼
Driver Behaviour Analysis
        │
        ▼
Behaviour Metrics Collection
        │
        ▼
Risk & Alert Detection
        │
        ▼
Behaviour Fingerprint Generation
        │
        ▼
Analytics Dashboard
        │
        ▼
Historical Reports
```

---

# 🧠 Behaviour Intelligence Workflow

```text
Live Driver Camera
        │
        ▼
Computer Vision
(OpenCV + MediaPipe)
        │
        ▼
Feature Extraction
        │
        ▼
Driver Metrics Engine
        │
        ▼
Behaviour Fingerprint
        │
        ▼
Anomaly Detection
        │
        ▼
Risk Assessment
        │
        ▼
Alert Generation
        │
        ▼
Dashboard Visualization
```

---

# 🛠 Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* Framer Motion
* React Router DOM
* Axios
* Lucide React

---

## Backend

* FastAPI
* SQLAlchemy
* PostgreSQL (Neon)
* Uvicorn
* Pydantic

---

## Authentication

* JWT
* Passlib
* BCrypt

---

## Database

* PostgreSQL (Neon)
* SQLAlchemy ORM

---

## AI & Computer Vision

* OpenCV
* MediaPipe Face Mesh
* YOLOv8
* Scikit-Learn
* Isolation Forest

---

## Real-Time Communication

* WebSockets

---

## Deployment

* Render
* Neon PostgreSQL

---

# 📂 Project Structure

```text
KINETIQ
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── layouts
│   │   ├── pages
│   │   ├── routes
│   │   ├── services
│   │   ├── hooks
│   │   └── utils
│   │
│   ├── package.json
│   └── README.md
│
├── backend
│   ├── app
│   ├── requirements.txt
│   ├── .env
│   └── README.md
│
├── LICENSE
└── README.md
```

---

# 📡 Core Modules

## 🔐 Authentication

* User Registration
* User Login
* JWT Authentication
* Protected APIs

---

## 👤 Driver Profiles

* Driver Information
* Profile Management
* Secure Updates

---

## 🚘 Monitoring

* Live Monitoring
* Session Tracking
* Behaviour Recording
* Driver Observation

---

## 🧠 Behaviour Intelligence

* Driver Fingerprinting
* Attention Analysis
* Fatigue Analysis
* Risk Prediction

---

## 📊 Analytics

* Behaviour Trends
* Driver Statistics
* Performance Metrics
* AI Insights

---

## 📑 Reports

* Historical Sessions
* Behaviour Reports
* Performance Summary
* Monitoring History

---

# 🚀 Running Locally

## Clone Repository

```bash
git clone https://github.com/<your-username>/KINETIQ.git

cd KINETIQ
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Runs at

```text
http://localhost:5173
```

---

## Backend Setup

```bash
cd backend

python -m venv .venv
```

### Windows

```bash
.venv\Scripts\activate
```

### Linux / macOS

```bash
source .venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Create a `.env`

```env
DATABASE_URL=
SECRET_KEY=
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=60
```

Run the server

```bash
uvicorn app.main:app --reload
```

Backend runs at

```text
http://127.0.0.1:8000
```

---

# 📖 API Documentation

Swagger UI

```text
http://127.0.0.1:8000/docs
```

ReDoc

```text
http://127.0.0.1:8000/redoc
```

---

# 🎯 Future Enhancements

* Driver Emotion Recognition
* Voice-Based Driver Assistance
* Predictive Fatigue Forecasting
* Fleet Monitoring Dashboard
* Cloud-Based Analytics
* ADAS Integration
* Behaviour-Based Driver Authentication
* Mobile Companion Application
* Edge AI Deployment
* Insurance Risk Assessment
* Smart Driver Scoring
* Multi-Camera Monitoring

---

# 👥 Team

**Project:** **KINETIQ – Intelligence in Motion**

Developed for **Hackathon 2026**

### Development Team

| Name | Role |
|------|------|
| **Atmihaa MB** | Backend Developer |
| **Niranjan J Menon** | Frontend Developer |

> *"Understanding the driver behind the wheel, not just the vehicle on the road."*
---

# 📜 License

This project has been developed exclusively for educational, research, and hackathon purposes.

---

# 🌟 Vision

> **"Transforming Driver Safety Through Intelligent Behaviour Analysis."**
