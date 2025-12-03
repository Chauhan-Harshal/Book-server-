# Book-server-
# 📚 Book Store API  
A complete RESTful API for managing books, users, and orders. Built using **Node.js**, **Express**, **MongoDB**, and **Mongoose**.

---

## 🚀 Features

### 🧑‍💻 User Features
- User Registration & Login (JWT Authentication)
- Password hashing using bcrypt
- Protected routes for authenticated users

### 📚 Book Features
- Add new books  
- Get all books  
- Get single book by ID  
- Update book details  
- Delete books  

### 🛒 Order Features (optional)
- Create order  
- Get user-wise orders  
- Manage order status  

---


---

## 📁 Project Folder Structure
book-store/
├── config/
│   └── db.js              # Database connection
├── controllers/           # Route handlers
│   ├── addBook.controller.js
│   ├── deleteBook.controller.js
│   ├── getAllBooks.controller.js
│   ├── getBookById.controller.js
│   └── updateBook.controller.js
├── logs/
│   └── access.log         # Access logs
├── middleware/
│   └── logger.js          # Logging middleware
├── models/
│   └── book.model.js      # Book schema
├── routes/
│   └── routes.js          # API routes
├── app.js                 # Express app setup
├── server.js              # Server entry point
├── package.json           # Dependencies and scripts
└── README.md              # Project documentation

