require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const Project = require('./models/Project');
const Skill = require('./models/Skill');
const Message = require('./models/Message');

const serverless = require('serverless-http');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve static frontend files - Only needed for local development
if (process.env.NODE_ENV !== 'production') {
  app.use(express.static(path.join(__dirname, '../frontend')));
}

// MongoDB Connection with Caching
let cachedDb = null;
const connectToDatabase = async () => {
  if (cachedDb) return cachedDb;
  
  const db = await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  cachedDb = db;
  console.log('MongoDB connected');
  return db;
};

// Middleware to ensure DB connection
app.use(async (req, res, next) => {
  try {
    await connectToDatabase();
    next();
  } catch (err) {
    console.error('DB Connection Error:', err);
    res.status(500).json({ error: 'Database connection failed' });
  }
});

// --- API Routes ---

// GET /api/skills
app.get('/api/skills', async (req, res) => {
  try {
    const skills = await Skill.find();
    // Group skills by category to match the frontend format
    const groupedData = {};
    skills.forEach(skill => {
      if (!groupedData[skill.category]) {
        groupedData[skill.category] = [];
      }
      groupedData[skill.category].push({
        name: skill.name,
        proficiency: skill.proficiency
      });
    });
    
    res.json({ data: groupedData });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch skills' });
  }
});

// GET /api/projects
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json({ data: projects });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

// POST /api/projects
app.post('/api/projects', async (req, res) => {
  const { title, description, category, techStack, githubUrl, liveUrl, featured } = req.body;
  
  if (!title || !description || !category) {
    return res.status(400).json({ success: false, message: 'Please provide title, description, and category.' });
  }

  try {
    const techArray = techStack ? (Array.isArray(techStack) ? techStack : techStack.split(',').map(s => s.trim())) : [];
    const newProject = new Project({ 
      title, 
      description, 
      category, 
      techStack: techArray, 
      githubUrl, 
      liveUrl,
      featured: featured || false
    });
    const saved = await newProject.save();
    res.status(201).json({ success: true, data: saved });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to create project.' });
  }
});

// POST /api/contact
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please provide all required fields.' });
  }

  try {
    const newMessage = new Message({ name, email, subject, message });
    await newMessage.save();
    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to save message.' });
  }
});

// Catch-all route (optional, but keep it simple for now)
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio API is running' });
});

// Export the handler for Netlify
module.exports.handler = serverless(app);

// Start server locally if not in serverless environment
if (process.env.NODE_ENV !== 'production' && !process.env.NETLIFY) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
