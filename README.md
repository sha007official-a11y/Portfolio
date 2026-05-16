# Full-Stack Personal Portfolio

A sleek, premium full-stack personal portfolio built with Node.js, Express, MongoDB, and a static monolithic frontend.

## Prerequisites

Before you can run this project locally, you need to install the following on your system:
- [Node.js](https://nodejs.org/) (which comes with npm)
- [MongoDB](https://www.mongodb.com/try/download/community) (or use a free MongoDB Atlas cloud cluster)

## Step-by-Step Local Setup

### 1. Build and Run Server
1. Open your terminal and navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install the backend dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file from the example:
   ```bash
   cp .env.example .env
   ```
4. Run the database seed script to add example projects and skills to your MongoDB database so they render on the frontend:
   ```bash
   npm run seed
   ```
5. Start the server (which will dynamically serve the API and the static frontend):
   ```bash
   npm start
   ```
   *Your portfolio should now be live on `http://localhost:5000` in your browser!*

### Deploying to Netlify (All-in-One)
1. Push your full repository code to GitHub.
2. Go to [Netlify](https://app.netlify.com/) and click **Add new site** > **Import an existing project**.
3. Connect your GitHub repository.
4. Netlify should automatically detect the `netlify.toml` settings:
   - **Build command**: (Leave blank or `npm install` in root if you add a root package.json)
   - **Publish directory**: `frontend`
   - **Functions directory**: `backend`
5. **Crucial**: Go to **Site Settings** > **Environment variables** and add:
   - `MONGO_URI`: Your MongoDB Atlas connection string.
   - `NODE_ENV`: `production`
6. Click **Deploy site**. Your portfolio and backend API will now be hosted together on Netlify!

### Alternative: Deploying Backend to Render
If you prefer a persistent server for the backend:
1. Push your code to GitHub.
2. Go to [Render](https://render.com) and create a new **Web Service**.
3. Set **Root Directory** to `backend`.
4. Set **Build Command** to `npm install`.
5. Set **Start Command** to `npm start`.
6. Add your `MONGO_URI` in Environment Variables.
7. Update `API_BASE` in `frontend/index.html` to point to your Render URL.
