# ⌨️ Alpha Clash Pro

> **Unleash Your Keyboard Kung Fu** — A fast-paced typing game to sharpen your keyboard skills without looking down!

🚀 [Play the Live Game](https://fanciful-basbousa-c736c1.netlify.app)

---

## 📖 Overview

**Alpha Clash Pro** is a browser-based keyboard typing game where a random letter appears on screen and you must press the correct key as fast as possible. Each correct keypress earns you a point. Each wrong key costs you a life. The game ends when all 5 lives are gone — so stay sharp!

---


## 🚀 Features

- 🎲 **Random letter generation** — every round is unpredictable
- ❤️ **Life system** — you get 5 lives per game
- 🏆 **Score tracking** — your score updates in real time
- 🖥️ **Visual keyboard** — highlights the key you just pressed
- 📱 **Responsive design** — works on mobile, tablet, and desktop
- ⌨️ **Keyboard shortcut support** — press `Enter` to start, `Esc` to end

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| Tailwind CSS | Utility-first styling |
| DaisyUI | Pre-built UI components |
| Vanilla JavaScript | Game logic |
| Google Fonts | Anton & Poppins typography |

---

## 📦 Dependencies

```json
{
  "daisyui": "^4.7.1",
  "tailwindcss": "CDN"
}
```

No build tools or package installation required — everything runs in the browser via CDN.

---

## 🏃 Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/alpha-clash-pro.git
   cd alpha-clash-pro
   ```

2. **Open in your browser**
   ```bash
   # Simply open index.html in any browser
   open index.html
   ```
   > No server or build step needed — it's pure HTML, CSS, and JS!

3. **Start playing**
   - Press the **Play Now** button or hit `Enter`
   - Type the letter shown on screen
   - Don't look at your keyboard! 👀

---

## 🎮 How to Play

| Action | Key |
|---|---|
| Start / Restart game | `Enter` or click **Play Now** |
| Type the displayed letter | Matching key |
| End the game early | `Esc` |

- ✅ **Correct key** → +1 Score, new letter appears
- ❌ **Wrong key** → -1 Life
- 💀 **0 lives left** → Game Over, your score is displayed

---

## 📁 Project Structure

```
alpha-clash-pro/
├── index.html          # Main HTML file
├── styles/
│   └── style.css       # Custom fonts & base styles
├── script/
│   ├── alpha-clash.js  # Core game logic
│   └── utility.js      # Helper functions
└── images/
    ├── background.png  # Background image
    ├── heart.svg       # Life icon
    └── dolar.svg       # Score icon
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request for bug fixes, new features, or design improvements.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> 💡 *Practice will make you pro!*
