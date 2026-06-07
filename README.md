# 🪨📄✂️ Rock Paper Scissors

A fun and interactive **Rock, Paper, Scissors** game built with pure **HTML**, **CSS**, and **JavaScript** — playable right in your browser with no dependencies or setup required.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20on%20Vercel-black?style=for-the-badge&logo=vercel)](https://rock-paper-scissors-gamma-lovat.vercel.app/)

---


## ✨ Features

- 🤖 **Play Against the Computer** — Random computer move generation to keep gameplay unpredictable.
- 🎨 **Premium Dark Gradient Theme** — Modern, high-end radial background gradient using deep indigo and navy-black tones.
- 🧊 **Glassmorphism UI** — Scoreboard cards and message container designed with semi-transparent backdrops, subtle borders, and backdrop-filter blur effects.
- 🚀 **Tactile Micro-Animations** — Spring-based hover scales, custom image rotations, and active click state animations on selection circles.
- 💥 **Confetti & Shake Feedback** — High-fidelity outcome animations including colorful confetti bursts on wins and horizontal shake animations on losses.
- 📊 **Glowing Score Cards** — Individual equal-sized scorecards with a gold glow for the player and a coral glow for the computer.
- 📱 **Fully Mobile Responsive** — Dynamically scales down to `320px` width using viewport width (`vw`) units, flexible margins, and fluid typography.
- 🔄 **Smooth Restart Button** — Fades in once a point is scored and lets you reset the game instantly.
- 📖 **How to Play Popup** — Accessible collapsable widget in the top-left corner explaining the rules.

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
RPS game/
├── index.html       # Main HTML page
├── style.css        # All styles and layout
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
