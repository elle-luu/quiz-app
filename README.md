# 🧪 QuizLab

QuizLab is a quiz app built with React. Pick a category, answer 10 questions before the timer runs out, and see how you score.

---

## What it does

- Pick from 4 categories: **Science, Maths, General Knowledge, Geography**
- Each question has a **15-second timer** — answer before it runs out or it skips automatically
- Answers are **shuffled randomly** every time so you can't memorize positions
- At the end you get your **score, percentage, and feedback**
- Questions are fetched **live from the internet** so you get fresh questions every time

---

## How to run it on your computer

Make sure you have [Node.js](https://nodejs.org/) installed first, then:

```bash
# Step 1 — Download the project
git clone https://github.com/your-username/quizlab.git

# Step 2 — Go into the project folder
cd quizlab

# Step 3 — Install dependencies
npm install

# Step 4 — Start the app
npm run dev
```

Then open your browser and go to **http://localhost:5173**

---

## How the app works

```
Start → Pick a Category → Answer 10 Questions → See Your Score → Play Again
```

That's it. No login, no signup, just open and play.

---

## Folder structure (where things live)

```
src/
├── pages/
│   ├── Landing.jsx      # The first screen you see
│   ├── Dashboard.jsx    # Where you pick a category
│   ├── Quiz.jsx         # The actual quiz with timer and answers
│   └── Result.jsx       # Your score at the end
├── services/
│   └── api.js           # Fetches questions from the internet
└── App.jsx              # Connects all the pages together
```

---

## Where the questions come from

Questions are pulled from **[The Trivia API](https://the-trivia-api.com)** — it's free, requires no account or API key, and works straight out of the box.

---

## Built with

- **React** — builds the UI
- **React Router** — handles moving between pages
- **Tailwind CSS** — handles styling
- **Vite** — runs the development server