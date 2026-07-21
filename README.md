# Client Intelligence Analyzer

A GenAI-powered web application built for the **GenAI Product Intern Assignment**.

The application analyzes client–coach conversations and generates a structured, evidence-grounded weekly client report to help coaches quickly understand a client's progress, challenges, and recommended next steps.

---

## Live Demo

**Frontend:** <https://healthcoachapp.vercel.app/>

**Backend API:** <https://healthcoach-7uol.onrender.com>

---

## Features

- 📝 Weekly Client Summary
- 🥗 Nutrition Adherence Analysis
- 🚶 Exercise / Steps Tracking
- 😴 Sleep Analysis
- 💧 Water Intake Tracking
- 🤒 Symptoms & Stress Detection
- 🤝 Engagement Level
- 🚧 Key Barriers
- ⏳ Pending Actions
- 🚩 Risk / Attention Flags
- 💡 Recommended Next Action
- 📌 Supporting Evidence from Conversation
- 🏷 Information Classification
  - Confirmed Fact
  - Client Reported
  - AI Inference
  - Missing Information
- 👨‍⚕️ Human Review
  - Approve
  - Edit Recommendation
  - Reject

---

<br>
<br>
<br>

# Tech Stack

## Frontend

- React
- TypeScript
- Tailwind CSS
- Axios

## Backend

- Node.js
- Express
- Gemini API

---

# Project Structure

```
Client-Intelligence-Analyzer

├── frontend
│   ├── src
│   ├── components
│   └── ...
│
├── backend
│   ├── src
│   │   ├── server.ts
│   │   ├── ai.ts
│   │   └── prompt.ts
│   └── ...
│
└── README.md
```

---

# How It Works

```
Client-Coach Conversation
            │
            ▼
      React Frontend
            │
POST /analyze
            │
            ▼
    Express Backend
            │
            ▼
       Gemini API
            │
            ▼
 Structured JSON Report
            │
            ▼
 Frontend Visualization
            │
            ▼
 Human Review
```

---

# Generated Report

The AI generates a structured report containing:

- Weekly Summary
- Nutrition Adherence
- Exercise / Steps
- Sleep
- Water Intake
- Symptoms / Stress
- Engagement Level
- Key Barriers
- Pending Actions
- Risk / Attention Flags
- Recommended Next Action

Each section contains:

- Summary
- Information Type
- Supporting Evidence

---

# Hallucination Reduction

To improve reliability, the system follows these principles:

- Uses only the provided conversation as context.
- Requires supporting evidence for important findings.
- Distinguishes between:
  - Confirmed Fact
  - Client Reported
  - AI Inference
  - Missing Information
- Returns "Missing Information" instead of making unsupported assumptions.

---

# Human Review

Before acting on the AI-generated recommendation, a coach can:

- Approve the report
- Edit the recommended next action
- Reject the report

This keeps the final decision under human control.

---

<br>
<br>

# Future Improvements

- User Authentication
- Conversation History
- Database Integration
- PDF Export
- Dashboard for Multiple Clients
- Analytics & Progress Tracking
- Long-term Trend Analysis

---

<br>
<br>
<br>


## Author

Aditya Raj

Email: [adityarajxdev@gmail.com](mailto:adityarajxdev@gmail.com)

GitHub: [https://github.com/Aditya987456/]

LinkedIn: [https://www.linkedin.com/in/adityaraj2981/]
