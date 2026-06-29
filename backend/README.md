# 🚗 KINETIQ Backend

> **Intelligence in Motion**
>
> AI-powered Personalized Driver Behaviour Intelligence System

---

## 📖 Overview

KINETIQ is an intelligent driver monitoring platform that learns a driver's unique behavioural patterns and continuously detects deviations that may indicate fatigue, distraction, stress, or unsafe driving conditions.

Unlike traditional Driver Monitoring Systems (DMS) that rely on fixed thresholds, KINETIQ builds a personalized **Driver Behaviour Fingerprint** for every user and uses it to perform adaptive risk analysis.

---

# ✨ Key Features

### 🔐 Authentication & Security

* User Registration
* User Login
* JWT Authentication
* Protected APIs
* Password Hashing with BCrypt

### 👤 Driver Profile Management

* Create Driver Profile
* Update Driver Profile
* View Driver Information
* Driver-specific data isolation

### 🚘 Driving Session Management

* Start Driving Session
* End Driving Session
* Session History
* Session Status Tracking

### 📊 Driver Metrics Engine

Real-time collection of:

* Blink Rate
* Attention Score
* Fatigue Score
* Risk Score
* Mobile Phone Detection

### 🚨 Intelligent Alert System

Automatic alert generation for:

* Fatigue Detection
* Driver Distraction
* Mobile Phone Usage
* High-Risk Behaviour

### 🧠 Behaviour Fingerprint Engine

Builds a personalized behavioural profile by learning:

* Average Blink Patterns
* Attention Behaviour
* Fatigue Characteristics
* Risk Characteristics

### 📈 Analytics Dashboard APIs

Provides:

* Total Sessions
* Total Alerts
* Average Attention Score
* Average Fatigue Score
* Average Risk Score

### ⚡ Real-Time Communication

* WebSocket Support
* Live Metric Streaming
* Real-Time Dashboard Updates

---

# 🏗 System Architecture

```text
Webcam
   │
   ▼
Computer Vision Engine
(OpenCV + MediaPipe)
   │
   ▼
Feature Extraction Layer
(Blinks, Gaze, Head Pose)
   │
   ▼
Metrics Engine
   │
   ▼
Behaviour Fingerprint Engine
   │
   ▼
Risk & Alert Engine
   │
   ▼
FastAPI Backend
   │
   ├── PostgreSQL Database
   └── WebSockets
            │
            ▼
      Frontend Dashboard
```

---

# 🔄 Backend Flow

```text
User Authentication
        │
        ▼
Create Driver Profile
        │
        ▼
Start Driving Session
        │
        ▼
Receive Driver Metrics
        │
        ▼
Generate Alerts
        │
        ▼
Store Session Data
        │
        ▼
Build Behaviour Fingerprint
        │
        ▼
Analytics & Insights
        │
        ▼
Real-Time Dashboard
```

---

# 🧠 Behaviour Fingerprint Workflow

```text
Historical Metrics
        │
        ▼
Compute Driver Baseline
        │
        ▼
Store Behaviour Fingerprint
        │
        ▼
Compare Future Behaviour
        │
        ▼
Detect Deviations
        │
        ▼
Generate Risk Insights
```

---

# 🛠 Tech Stack

## Backend Framework

* FastAPI
* Uvicorn

## Database

* PostgreSQL (Neon)
* SQLAlchemy ORM

## Authentication

* JWT (JSON Web Tokens)
* Passlib
* BCrypt

## Validation

* Pydantic

## Real-Time Communication

* WebSockets

## AI & Computer Vision (Integration Phase)

* OpenCV
* MediaPipe Face Mesh
* YOLOv8
* Scikit-Learn
* Isolation Forest

## Deployment

* Render / Railway
* Neon PostgreSQL

---

# 📂 Project Structure

```text
backend
│
├── app
│   ├── api
│   │   └── routes
│   │       ├── auth.py
│   │       ├── profile.py
│   │       ├── session.py
│   │       ├── metric.py
│   │       ├── alert.py
│   │       ├── fingerprint.py
│   │       └── analytics.py
│   │
│   ├── core
│   │       ├── config.py
│   │       ├── security.py
│   │       └── websocket_manager.py
│   │
│   ├── database
│   │       ├── base.py
│   │       └── session.py
│   │
│   ├── models
│   ├── schemas
│   ├── services
│   └── main.py
│
├── requirements.txt
├── .env
└── README.md
```

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint       |
| ------ | -------------- |
| POST   | /auth/register |
| POST   | /auth/login    |
| GET    | /auth/me       |

---

## Driver Profile

| Method | Endpoint |
| ------ | -------- |
| POST   | /profile |
| GET    | /profile |
| PUT    | /profile |

---

## Driving Sessions

| Method | Endpoint         |
| ------ | ---------------- |
| POST   | /session/start   |
| POST   | /session/end     |
| GET    | /session/history |

---

## Metrics

| Method | Endpoint |
| ------ | -------- |
| POST   | /metrics |
| GET    | /metrics |

---

## Alerts

| Method | Endpoint |
| ------ | -------- |
| GET    | /alerts  |

---

## Behaviour Fingerprint

| Method | Endpoint           |
| ------ | ------------------ |
| POST   | /fingerprint/build |
| GET    | /fingerprint       |

---

## Analytics

| Method | Endpoint   |
| ------ | ---------- |
| GET    | /analytics |

---

## WebSocket

| Endpoint               |
| ---------------------- |
| ws://localhost:8000/ws |

---

# 🚀 Running Locally

## Clone Repository

```bash
git clone https://github.com/<your-username>/KinetIQ.git
cd KinetIQ/backend
```

## Create Virtual Environment

```bash
python -m venv .venv
```

## Activate Environment

### Windows

```bash
.venv\Scripts\activate
```

### Linux/Mac

```bash
source .venv/bin/activate
```

## Install Dependencies

```bash
pip install -r requirements.txt
```

## Configure Environment Variables

Create a `.env` file:

```env
DATABASE_URL=
SECRET_KEY=
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=60
```

## Run Server

```bash
uvicorn app.main:app --reload
```

---

# 📖 API Documentation

Swagger UI:

```text
http://127.0.0.1:8000/docs
```

ReDoc:

```text
http://127.0.0.1:8000/redoc
```

---

# 🎯 Future Enhancements

* Personalized Risk Prediction Engine
* Isolation Forest Anomaly Detection
* Driver Authentication via Behaviour
* Fleet Monitoring System
* Insurance Risk Assessment
* ADAS Integration
* Edge AI Deployment
* Predictive Fatigue Forecasting

---

# 👥 Team

**Project:** KINETIQ – Intelligence in Motion

> Understanding the driver behind the wheel, not just the vehicle on the road.
