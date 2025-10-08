# 🧠 Jobby App

**Jobby App** is a fully functional job search platform built using **React.js**, allowing users to browse, filter, and view detailed job listings. It implements **authentication**, **protected routes**, **API integration**, and **state management** to simulate a real-world job portal experience.

---

## 🚀 Project Overview

Jobby App allows users to:

* **Login securely** using JWT authentication.
* **Search for jobs** using keywords.
* **Filter jobs** by employment type and salary range.
* **View detailed job information**, including company profile, skills required, and similar jobs.
* **Handle API failures gracefully** with retry mechanisms and loading states.
* **Responsive UI** across all device sizes.

---

## 🎥 Demo Previews

## Live Link

(https://ashleshjobbyapp.ccbp.tech/)

### ✅ Success View

[https://assets.ccbp.in/frontend/content/react-js/jobby-app-success-output-v0.mp4](https://assets.ccbp.in/frontend/content/react-js/jobby-app-success-output-v0.mp4)

### ❌ Failure View

[https://assets.ccbp.in/frontend/content/react-js/jobby-app-failure-output-v1.mp4](https://assets.ccbp.in/frontend/content/react-js/jobby-app-failure-output-v1.mp4)

---

## 🧩 Features

### 🔐 Authentication

* Users must **log in** with valid credentials.
* JWT token is stored in cookies for session management.
* Protected routes for `Home`, `Jobs`, and `Job Details`.

### 🏠 Home Page

* Highlights platform purpose.
* “**Find Jobs**” button navigates to job listings.

### 💼 Jobs Page

* Fetches **profile details** and **job listings** from APIs.
* Supports:

  * Search by keyword
  * Filter by employment type
  * Filter by salary range
* Displays appropriate:

  * **Loader** while fetching data
  * **Failure View** on API error
  * **No Jobs View** when results are empty

### 📄 Job Details Page

* Displays complete job information:

  * Role details
  * Required skills
  * Life at the company
  * Similar job recommendations
* Retry option for failed requests.
* “**Visit**” button opens the company website in a new tab.

### 🚫 Not Found Route

* Handles undefined paths gracefully with a custom 404 page.

### 🧭 Header Navigation

* Logo, Home, Jobs, and Logout controls.
* Responsive across screen sizes.

---

## ⚙️ Tech Stack

| Technology           | Purpose                          |
| -------------------- | -------------------------------- |
| **React.js**         | Component-based UI development   |
| **React Router**     | Navigation and protected routing |
| **Cookies**          | JWT token management             |
| **Fetch API**        | Data fetching from REST APIs     |
| **Loader Spinner**   | Loading indicators               |
| **CSS (Responsive)** | Adaptive layout for all devices  |

---

## 🧠 Concepts Implemented

* React Components & Props
* State Management & Lifecycle Methods
* Routing and Protected Routes
* Conditional Rendering
* API Calls with Fetch
* Responsive Design (CSS Flexbox / Media Queries)
* Error & Loader Handling

---

## 📡 APIs Used

| API                             | Method | Purpose                 |
| ------------------------------- | ------ | ----------------------- |
| `https://apis.ccbp.in/login`    | POST   | User authentication     |
| `https://apis.ccbp.in/profile`  | GET    | Fetch user profile      |
| `https://apis.ccbp.in/jobs`     | GET    | Fetch job listings      |
| `https://apis.ccbp.in/jobs/:id` | GET    | Fetch detailed job info |

---

## 🔧 Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/<your-username>/jobby-app.git
   ```
2. **Navigate into the project**

   ```bash
   cd jobby-app
   ```
3. **Install dependencies**

   ```bash
   npm install
   ```
4. **Run the project**

   ```bash
   npm start
   ```

---

## 👤 Test Credentials

Use these credentials to log in:

```
Username: rahul
Password: rahul@2021
```

---

## 📁 Folder Structure

```
jobby-app/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Login/
│   │   ├── Home/
│   │   ├── Jobs/
│   │   ├── JobItemDetails/
│   │   ├── Header/
│   │   ├── NotFound/
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   ├── App.css
│   └── ...
│
├── package.json
├── README.md
└── ...
```

---

## 🧠 Learning Highlights

Through this project, I mastered:

* Real-world **API handling** and data transformation.
* Building **protected routes** using JWT.
* Managing **complex UI states** and filters dynamically.
* Handling **asynchronous requests** with error and retry logic.
* Creating **responsive, test-friendly** React applications.

---

## 📸 UI Previews

| Page        | Screenshot                                                                                                        |
| ----------- | ----------------------------------------------------------------------------------------------------------------- |
| Login       | [Login Design](https://assets.ccbp.in/frontend/content/react-js/jobby-app-login-lg-output.png)                    |
| Home        | [Home Design](https://assets.ccbp.in/frontend/content/react-js/jobby-app-home-lg-output.png)                      |
| Jobs        | [Jobs Design](https://assets.ccbp.in/frontend/content/react-js/jobby-app-jobs-success-lg-output-v0.png)           |
| Job Details | [Details Design](https://assets.ccbp.in/frontend/content/react-js/jobby-app-job-details-success-lg-output-v0.png) |
| Not Found   | [404 Design](https://assets.ccbp.in/frontend/content/react-js/jobby-app-not-found-lg-output-v0.png)               |

---

## 🏁 Final Thoughts

This project combines **front-end engineering skills**, **state management**, and **API integration** in a realistic job search environment.
It’s a strong portfolio project for demonstrating **React.js proficiency** and **frontend problem-solving**.

---

## 🧑‍💻 Author

**Ashlesh Bathina**
🚀 Aspiring Software Engineer
📫 Connect on [LinkedIn](https://linkedin.com) | [GitHub](https://github.com/your-github-username)
