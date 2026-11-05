require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project');
const Skill = require('./models/Skill');

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected for seeding'))
.catch(err => console.log('MongoDB connection error:', err));

const seedProjects = [
  {
    title: 'MediTwin – AI Clinical Case-Taking System',
    description: 'An AI-powered clinical case-taking concept designed to collect patient information through voice and touch, process medical documents, and generate a structured doctor-ready summary before consultation. Smart India Hackathon 2026 (SIH26047).',
    category: 'AI',
    featured: true,
    techStack: ['Artificial Intelligence', 'Voice Input', 'OCR', 'JavaScript', 'HTML', 'CSS'],
    githubUrl: '',
    liveUrl: ''
  },
  {
    title: 'InsightPilot AI',
    description: 'An AI-focused web platform delivering smart automated data analysis, instant user query synthesis, and intuitive real-time insights.',
    category: 'AI',
    featured: true,
    techStack: ['Artificial Intelligence', 'JavaScript', 'HTML', 'CSS', 'API Integration'],
    githubUrl: '',
    liveUrl: 'https://insightpilot-ai-three.vercel.app/'
  },
  {
    title: 'CODEX: THE HIDDEN PROTOCOL',
    description: 'A technical QR-based treasure hunt experience designed for students, combining programming concepts, logical challenges, location-based clues, and timed answer validation.',
    category: 'Web',
    featured: false,
    techStack: ['HTML', 'CSS', 'Vanilla JavaScript', 'QR Logic'],
    githubUrl: '',
    liveUrl: ''
  }
];

const seedSkills = [
  { category: 'Programming', name: 'Python', proficiency: 80 },
  { category: 'Programming', name: 'Java', proficiency: 80 },
  { category: 'Programming', name: 'C', proficiency: 75 },
  { category: 'Programming', name: 'JavaScript', proficiency: 80 },

  { category: 'Web Development', name: 'HTML5', proficiency: 90 },
  { category: 'Web Development', name: 'CSS3', proficiency: 85 },
  { category: 'Web Development', name: 'Vanilla JavaScript', proficiency: 80 },

  { category: 'Database', name: 'MongoDB', proficiency: 70 },
  { category: 'Database', name: 'SQL', proficiency: 75 },

  { category: 'AI / Development', name: 'Artificial Intelligence', proficiency: 75 },
  { category: 'AI / Development', name: 'Generative AI', proficiency: 75 },
  { category: 'AI / Development', name: 'AI-Powered App Development', proficiency: 70 },

  { category: 'Tools', name: 'Git & GitHub', proficiency: 80 },
  { category: 'Tools', name: 'VS Code', proficiency: 90 }
];

const seedDB = async () => {
  try {
    await Project.deleteMany({});
    await Skill.deleteMany({});
    
    await Project.insertMany(seedProjects);
    await Skill.insertMany(seedSkills);
    
    console.log('Database seeded successfully with Shafeeq Ahamed S Projects and Skills!');
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
};

seedDB();
