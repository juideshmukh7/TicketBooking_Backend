# 🎟️ Online Ticket Booking System

A simple **Online Ticket Booking** web application built using **Node.js**, **Express.js**, **EJS**, and **Tailwind CSS**. The application allows users to browse and book hotels, flights, and rental cars through an interactive web interface.

---

## 🚀 Features

* 🏨 Browse and book hotels
* ✈️ Browse and book flights
* 🚗 Browse and book rental cars
* 🎨 Responsive UI with Tailwind CSS
* 📄 Server-side rendering using EJS
* 🛣️ Express routing with MVC architecture
* 📂 Static asset management
* 🔄 Separate controllers and routers for modular code organization

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **EJS**
* **Tailwind CSS**
* **PostCSS**
* **Nodemon**

---

## 📁 Project Structure

```
Project1_OnlineTicketBooking
│
├── controllers/
│   ├── hostController.js
│   └── userController.js
│
├── public/
│   ├── images/
│   └── output.css
|   └── home.css
│
├── routes/
│   ├── hostRouter.js
│   └── userRouter.js
│
├── utils/
│   └── pathUtil.js
│
├── views/
│   ├── partials/
│   └── store/
│
├── app.js
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── nodemon.json
```

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/juideshmukh7/TicketBooking_Backend.git
cd Project1_OnlineTicketBooking
```

### 2. Install all dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

The application will be available at:

```
http://localhost:3001
```

---

## 📥 Creating the Project from Scratch

### Initialize Node.js

```bash
npm init -y
```

### Install Express

```bash
npm install express
```

### Install EJS

```bash
npm install ejs
```

### Install Body Parser (optional)

```bash
npm install body
```

### Install Parser (if used)

```bash
npm install parser
```

### Install Nodemon

```bash
npm install --save-dev nodemon
```

### Install Tailwind CSS

```bash
npm install --save-dev tailwindcss postcss autoprefixer
```

### Initialize Tailwind CSS

```bash
npx tailwindcss init -p
```

---

## ▶️ Build Tailwind CSS

```bash
npx tailwindcss -i ./views/input.css -o ./public/output.css --watch
```

---

## 📜 Scripts

```json
"scripts": {
  "start": "nodemon app.js & npm run tailwind",
  "tailwind": "tailwindcss -i ./views/input.css -o ./public/output.css --watch"
}
```

---

## 📸 Screenshots

You can add screenshots of:

* Home Page
* Hotels Page
* Flights Page
* Cars Page
* Booking Confirmation Pages

---

## 🌱 Future Improvements

* User Authentication
* Database Integration (MongoDB)
* Booking History
* Search and Filters
* Admin Dashboard
* Responsive Improvements

---

## 👨‍💻 Author

**Jui Deshmukh**

GitHub: https://github.com/juideshmukh7

---

## 📄 License

This project is licensed under the MIT License.
