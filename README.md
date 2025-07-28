
# Rockstar GTA Landing Animation

A Grand Theft Auto-inspired animated landing page built with **React**, **Tailwind CSS**, and **GSAP** for immersive animations. This project features a custom SVG mask intro, layered parallax effects, and responsive hero content inspired by Rockstar's iconic visuals.


## ✨ Features

- 🔥 Smooth intro animation using SVG text masking
- 🎮 GTA-style title reveal with GSAP transitions
- 🌌 Parallax background motion on mouse movement
- 👩‍🎤 Animated character entrance
- 🎮 Responsive layout for all screen sizes
- 🕹️ Styled with Tailwind CSS
- 🎥 Built-in scroll prompt (hidden on mobile for better UX)

---

## 📸 Preview
<img width="1920" height="900" alt="Screenshot (293)" src="https://github.com/user-attachments/assets/491cc657-cc10-49ec-a8a9-1776bee14f21" />



## 🛠️ Tech Stack

- **React.js** – UI framework
- **GSAP** – Animation engine
- **Tailwind CSS** – Utility-first styling
- **Lucide Icons** – SVG icons (used for scroll arrow)


## 🧩 How It Works

1. **SVG Mask Loader** animates in with "VI" text and scales out.
2. The main content scales/rotates into view after the mask animation ends.
3. Background layers (`sky`, `bg`) and text move slightly with mouse for depth.
4. Character image animates in from below.
5. Responsive text and scroll prompt guide users (scroll section hidden on mobile).
6. A second section appears with more game-themed content and a download button.



## 📦 Installation

```bash
git clone https://github.com/your-username/gta-landing-gsap.git
cd gta-landing-gsap
npm install
npm run dev
````

> Make sure to add your images (bg.png, sky.png, etc.) inside the `/public` folder.

---

## 📱 Responsiveness

* ✅ Desktop: Full animations and layout
* ✅ Tablet: Scaled down assets
* ✅ Mobile: Scroll prompt hidden, layout adjusted, text scaled down

---

## 🧪 Animation Credits

All animations are powered by [GSAP](https://greensock.com/gsap/), with `useGSAP()` for React integration.

---

## 📜 License

MIT License — feel free to use, modify, and share with credit.


## 💡 Inspiration

This project is inspired by Rockstar’s Grand Theft Auto series and built for fun, animation exploration, and web UI experimentation.

---

## 🤝 Contribute

Pull requests are welcome! Feel free to fork the repo and improve animations, performance, or responsiveness.




