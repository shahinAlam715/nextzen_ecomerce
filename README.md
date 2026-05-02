
# 🌐 Multipage Responsive Website

A fully responsive multipage website built using React, modern JavaScript, and CSS. This project demonstrates client-side routing and clean UI design for all devices.

## 🚀 Live Demo

👉 https://nextzen-ecomerce.vercel.app


## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)
* React JS
* React Router DOM

## ✨ Features

* 📄 Multipage layout (Home, About, Contact, etc.)
* 🔀 Client-side routing using React Router
* 📱 Fully responsive (Mobile, Tablet, Desktop)
* ⚡ Fast navigation without page reload
* 🎨 Clean and modern UI design
* 🧭 Navbar with active link highlighting
* 🦶 Footer section with useful links

## 📂 Folder Structure

```
src/
 ├── components/
 ├── pages/
 ├── routes/
 ├── assets/
 └── App.js
```

## ⚙️ Installation & Setup

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
npm run dev
```

## 📌 Usage

* Navigate between pages using the navbar
* Fully responsive layout works on all devices
* Easy to customize components and pages

## 🔄 Routing Example

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repo and submit a pull request.

## 📧 Contact

Your Name - [Md. Shahin Alam](shahin236715@gmail.com)
GitHub - https://github.com/shahinAlam715
