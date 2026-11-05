# Shafeeq Ahamed S — Portfolio

> **B.Tech IT Student | Full-Stack & AI Developer**  
> Hindustan Institute of Technology and Science (HITS), Chennai, Tamil Nadu

A modern, high-performance personal portfolio tailored for software engineering internships, full-stack internships, AI/ML roles, campus placements, and hackathon project evaluations.

---

## 🛠 Technology Stack

This portfolio strictly adheres to a clean, lightweight, vanilla architecture without bloated frameworks:

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+), JSON
- **Backend & Database** *(Optional / Integrated)*: Node.js, Express.js, MongoDB (Mongoose)
- **Zero Frontend Frameworks**: No React, Next.js, Vue, Angular, Vite, Tailwind CSS, Bootstrap, or TypeScript

---

## 📁 Project Structure

```
Portfolio/
├── frontend/
│   ├── index.html         # Main monolithic, responsive portfolio page
│   ├── projects.json      # Structured project data (MediTwin, InsightPilot AI, CODEX)
│   ├── skills.json        # Categorized technical skills
│   └── assets/
│       └── avatar.jpg     # Extracted profile photo
├── backend/               # Optional Express + MongoDB API
│   ├── models/
│   │   ├── Message.js     # Contact message schema
│   │   ├── Project.js     # MongoDB project schema
│   │   └── Skill.js       # MongoDB skill schema
│   ├── seed.js            # Database seeder with current skills and projects
│   ├── server.js          # Express server & API endpoints
│   ├── .env.example
│   └── package.json
├── api/
│   └── index.js           # Serverless entry point
├── netlify.toml           # Netlify build & functions configuration
├── vercel.json            # Vercel deployment routes
└── README.md
```

---

## 🚀 Running the Portfolio Locally

### Option 1: Direct / Static Preview (Fastest)
You can directly open `frontend/index.html` in your web browser, or use any lightweight static server:

```bash
# Using Python (standard system utility)
cd frontend
python -m http.server 3000
```
Open [http://localhost:3000](http://localhost:3000) in your browser. The portfolio operates smoothly with full JSON fallback data.

### Option 2: Full-Stack Mode with MongoDB Backend
1. Open your terminal and navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create your `.env` file from `.env.example`:
   ```bash
   cp .env.example .env
   ```
4. Seed your local MongoDB database:
   ```bash
   npm run seed
   ```
5. Start the server:
   ```bash
   npm start
   ```
6. Visit [http://localhost:5000](http://localhost:5000) in your browser.

---

## 📌 Featured Projects

1. **MediTwin – AI Clinical Case-Taking System**  
   *Smart India Hackathon 2026 — SIH26047*  
   AI-powered clinical case-taking concept to collect patient information via voice and touch, process medical documents with OCR, and compile doctor-ready summaries.

2. **InsightPilot AI**  
   *Live Demo: [https://insightpilot-ai-three.vercel.app/](https://insightpilot-ai-three.vercel.app/)*  
   An AI-driven insight platform providing automated query synthesis, intelligent summaries, and responsive user interaction.

3. **CODEX: THE HIDDEN PROTOCOL**  
   *Campus Technical Challenge*  
   A technical QR-based treasure hunt combining programming logic, location-based clues, and real-time timed answer validation.

---

## 📄 License
This project is for personal portfolio and evaluation purposes.
