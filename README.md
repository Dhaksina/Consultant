# Reva Phoenix — Industrial Quality, API & IMS Engineering

Official enterprise web application and Media/Asset Management CMS for **Reva Phoenix Labs & Consultants Pvt. Ltd. (Consulting Division)**.

---

## 🚀 Overview

Reva Phoenix provides premier global training, consulting, implementation, and auditing solutions across Aerospace (AS 9100), Automotive (IATF 16949), and Oil & Gas (API Spec Q1 / Q2 & Monogram) industries.

This repository contains:
1. **Interactive Client Application**: Modern responsive web application featuring Lenis smooth scrolling, GSAP micro-animations, standard track explorers, video masterclasses, and brochure downloads.
2. **Media & Content Admin CMS (`/admin/`)**: Complete administrative portal for real-time asset updates, brochures, accreditation certificates, video showcases, and contact inquiry management.
3. **Dual Cloud Backend**:
   - **Supabase**: Primary PostgreSQL relational database with Row Level Security (RLS) policies.
   - **Firebase Authentication**: Email/Password user authentication and role-based access.
   - **Cloud Firestore**: Real-time document and media catalog synchronization.
   - **Firebase Hosting**: Production-ready deployment configuration with SPA routing and asset caching.

---

## 🛠️ Tech Stack

- **Frontend**: Vanilla ES6+ JavaScript (ES Modules), HTML5, Modern CSS Design System (Custom properties, dark industrial aesthetics).
- **Smooth Interaction & Animation**: Lenis Inertia Scroll, GSAP 3 & ScrollTrigger.
- **Authentication**: Firebase Authentication v10 (Modular ESM).
- **Databases**:
  - Supabase (PostgreSQL 15 with Row Level Security)
  - Google Cloud Firestore (NoSQL Document Store)
- **Deployment**: Firebase Hosting (`firebase.json`, `.firebaserc`).

---

## 📁 Project Structure

```
├── admin/                      # Media & Asset Management Admin CMS
│   ├── css/admin.css          # Executive Dark Industrial theme
│   ├── js/admin-app.js        # Admin CMS orchestrator & Firebase auth handler
│   └── index.html             # Admin portal entry point
├── assets/                     # Visual media assets
│   ├── about/                 # Executive & leadership imagery
│   ├── api/                   # API inspection & monogram assets
│   ├── clients/               # Global enterprise client logos
│   ├── documents/             # Official corporate brochures & ISO certificates (PDF)
│   ├── hero/                  # Industrial hero photography
│   ├── industries/            # Sector imagery (Automotive, Aerospace, Oil & Gas)
│   ├── infrastructure/        # Calibration labs & metrology suites
│   ├── logo/                  # Official Reva Phoenix branding
│   └── services/              # Consulting & training photography
├── src/                        # Core application source code
│   └── js/
│       ├── app.js             # Client application bootstrapper & contact handler
│       ├── config.js          # Central backend configuration loader
│       ├── firebase-auth.js   # Firebase Auth v10 client
│       ├── firebase-firestore.js # Cloud Firestore real-time sync module
│       ├── supabase-client.js # Supabase client & CRUD operations
│       ├── cms-store.js       # Central data store & multi-tier cache
│       ├── components.js      # Dynamic UI component rendering
│       ├── modals.js          # Lightbox, Video, PDF, and Quote modal controllers
│       ├── smooth-scroll.js   # Lenis inertia scroll orchestrator
│       └── standards-tracks.js# Interactive certification tracks
├── firebase.json              # Firebase Hosting configuration & rewrites
├── .firebaserc                # Firebase project alias
├── schema.sql                 # Supabase PostgreSQL migration & RLS policies
├── server.py                  # Local Python development server with API proxy
└── index.html                 # Public website entry point
```

---

## ⚙️ Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/Dhaksina/Consultant.git
cd Consultant
```

### 2. Environment Setup
Copy the template environment file and populate your project keys:
```bash
cp .env.example .env
```

### 3. Run Locally
Start the local development server:
```bash
python3 server.py
```
- **Public Website**: [http://localhost:8000](http://localhost:8000)
- **Admin CMS**: [http://localhost:8000/admin/](http://localhost:8000/admin/)

---

## ☁️ Deployment

Deploy to Firebase Hosting:
```bash
firebase login
firebase deploy --only hosting
```

---

## 📄 License

Proprietary © Reva Phoenix Labs & Consultants Pvt. Ltd. All rights reserved.
