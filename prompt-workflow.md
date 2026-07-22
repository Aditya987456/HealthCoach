# Prompt & Workflow

## Overview

This project analyzes a client–coach conversation and generates a structured weekly client intelligence report using the Gemini API.

The goal is to summarize the conversation while keeping the output evidence-based and avoiding unsupported conclusions.

---

# Workflow

```
Client-Coach Conversation
          │
          ▼
Frontend (React)
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
Structured JSON Response
          │
          ▼
Frontend Report
          │
          ▼
Human Review
(Approve / Edit / Reject)
```

---

# Prompt

The AI is instructed to:

- Analyze only the provided conversation.
- Generate a structured weekly report.
- Return only valid JSON.
- Never return Markdown or extra explanation.
- Never invent information.
- Use "Missing Information" when enough evidence is not available.
- Include supporting evidence for important findings.
- Classify each important finding as:
  - Confirmed Fact
  - Client Reported
  - AI Inference
  - Missing Information

The generated report includes:

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

# Hallucination Prevention

The prompt includes the following safeguards:

- Analyze only the provided conversation.
- Do not use outside knowledge.
- Do not make medical diagnoses.
- Do not guess missing information.
- Return "Missing Information" if the conversation does not provide enough evidence.
- Include supporting evidence for every important finding.

---

# Output Format

The AI returns a structured JSON response, which is rendered directly by the frontend.

This keeps the frontend simple and ensures every section follows the same structure.