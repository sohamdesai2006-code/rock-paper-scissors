# 🪨📄✂️ Rock Paper Scissors

A fun, responsive, and highly interactive **Rock, Paper, Scissors** game built with pure **HTML**, **CSS**, and **JavaScript** — playable right in your browser with zero setup.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20on%20Vercel-black?style=for-the-badge&logo=vercel)](https://rock-paper-scissors-gamma-lovat.vercel.app/)

---

## ✨ Features

- 🏆 **"Best of X" Series Modes** — Choose between **Endless**, **Best of 3** (first to 2 wins), and **Best of 5** (first to 3 wins) game sets to play standard tournament rounds.
- 🎓 **Game Over Victory Overlay** — Full-screen glassmorphic modal displaying the final series results, score counts, and an interactive "Play Again" restart button.
- 🤖 **Smart Computer Play** — Play against a random computer opponent with instant calculations and randomized matchups.
- 📊 **Real-time Scorecard** — User and computer scores update dynamically in stylized glassmorphic card widgets with glowing text-shadows.
- 🎉 **Vibrant Micro-Animations & Confetti** — Spring-bouncy hover scaling on choices, tactile shake feedback on losses, and a massive confetti celebration upon winning the series.
- 💬 **Dynamic Msg Banners** — Glowing banners change color dynamically based on round outcomes (green for win, red for loss, yellow for draw).
- 📐 **Height-Adaptive Layout** — Automatically fits the entire UI on a single screen without vertical scrollbars using fluid CSS clamp scales and balanced distribution on both desktop and mobile viewports.
- 📖 **"How to Play" Collapsible Rules** — Collapsible rules panel floating in the top-left corner explaining game rules at a glance.
- 🚫 **No Text Selection** — Custom app-like user selection controls disabled across interactive components for clean mobile responsiveness.

---

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic layout structure and DOM nodes |
| **CSS3** | Premium radial gradients, glassmorphism, clamp scales, animations |
| **JavaScript (ES6)** | Game loop logic, series calculations, event listeners |
| **Canvas Confetti** | Celebration visual effects on wins |

---

## 📁 Project Structure

```
RPS game/
├── index.html       # Main HTML page
├── style.css        # Premium styling and responsiveness rules
├── RPS.js           # Game loops and interactivity controllers
├── rock.png         # Rock choice hand image
├── paper.png        # Paper choice hand image
├── scissor.png      # Scissor choice hand image
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

> Note: You can also simply open `index.html` directly in any modern web browser to run the game locally.

---

## 🎮 How to Play

1. Select a **Game Mode**: **Endless**, **Best of 3**, or **Best of 5** at the top.
2. Click on **Rock**, **Paper**, or **Scissor** icons to play your move.
3. The computer instantly plays its random response move.
4. The result card displays outcomes (glowing green/red/yellow) with interactive confetti or shake animations.
5. Once a player reaches the target score (2 for Best of 3, 3 for Best of 5), a gorgeous victory/defeat modal overlays the screen.
6. Click **Play Again** inside the modal or **Restart Game** at the bottom at any time to clear scores back to 0 – 0.

---

## 🔴 Live Demo

🚀 The project is live and deployed on **Vercel**:

**[https://rock-paper-scissors-gamma-lovat.vercel.app/](https://rock-paper-scissors-gamma-lovat.vercel.app/)**

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
