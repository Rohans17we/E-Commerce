# E-Commerce App

This is a simple **E-Commerce** web application built with **React** and **Redux** for state management. It includes a modern, user-friendly interface for browsing products, managing the shopping cart, and completing the checkout process. 

### Key Features:
- **Home Page**: Displays a list of featured products.
- **Product Page**: View and explore all products.
- **Shopping Cart**: Add items to the cart, adjust quantities, and remove items.
- **Checkout Page**: View order summary and proceed to checkout.
- **Redux Integration**: Manages the global state of the shopping cart and checkout process.

---

## Project Structure

```bash
├── public/
│   ├── vite.svg
│   └── index.html
├── src/
│   ├── assets/
│   │   └── Images/                  # Product images
│   ├── components/                  # Reusable components (Navbar, Footer, ProductCard, etc.)
│   ├── pages/                       # Pages for Home, Products, Cart, Checkout
│   ├── redux/                       # Redux actions, reducers, and store
│   ├── styles/                      # CSS files for styling
│   ├── App.jsx                      # Main application component
│   ├── main.jsx                     # Entry point for the app
│   └── vite.config.js               # Vite configuration file
└── README.md
