# 🪨📄✂️ Rock Paper Scissors

A fun and interactive **Rock, Paper, Scissors** game built with pure **HTML**, **CSS**, and **JavaScript** — playable right in your browser with no dependencies or setup required.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20on%20Vercel-black?style=for-the-badge&logo=vercel)](https://rock-paper-scissors-gamma-lovat.vercel.app/)

---


## ✨ Features

- 🤖 **Play Against the Computer** — The computer makes a random choice every round, keeping every game unpredictable
- 📊 **Live Score Tracking** — Scores for both You and the Computer update in real time after every round
- 💬 **Dynamic Result Messages** — Clear win/lose/draw feedback with color-coded banners (green, red, navy)
- 🔄 **Restart Button** — Resets both scores and the message back to the start; only appears after the first point is scored
- 📖 **How to Play Popup** — A collapsible rules card in the top-left corner explaining game rules at a glance
- 🚫 **No Text Selection** — Clean, app-like feel with text selection disabled across the entire page
- 📐 **Single-Screen Layout** — The entire game fits within the viewport — no scrolling needed
- 🎨 **Dark Navy Theme** — Consistent color palette with a dark navy header, bisque text, and styled rounded buttons

---

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| **HTML5** | Page structure and game elements |
| **CSS3** | Styling, flexbox layout, animations, hover effects |
| **JavaScript (ES6)** | Game logic, DOM manipulation, event listeners |

---

## 📁 Project Structure

```
js-lec10/
├── index.html       # Main HTML page
├── style10.css      # All styles and layout
├── RPS.js           # Game logic and interactivity
├── rock.png         # Rock choice image
├── paper.png        # Paper choice image
├── scissor.png      # Scissor choice image
└── README.md        # Project documentation
```

---

## 🚀 How to Run

1. Clone or download this repository
2. Open a terminal in the project folder
3. Run a local server:
   ```bash
   npx http-server -p 8080 -c-1
   ```
4. Open your browser and visit **[http://localhost:8080](http://localhost:8080)**

> You can also simply open `index.html` directly in any modern browser — no server required for basic play.

---

## 🎮 How to Play

1. Click on **Rock**, **Paper**, or **Scissor** to make your move
2. The computer instantly picks its move at random
3. The result banner tells you who won the round
4. Scores update automatically — first to rack up the most points wins!
5. Click **Restart Game** at any time to reset back to 0 – 0

---

## 🔴 Live Demo

🚀 The project is live and deployed on **Vercel**:

**[https://rock-paper-scissors-gamma-lovat.vercel.app/](https://rock-paper-scissors-gamma-lovat.vercel.app/)**

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
