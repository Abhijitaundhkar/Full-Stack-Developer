# Full-Stack-Developer

# Project description
This is basic simple e-commerce website that allows users to view a list of products, add
products to their cart, and place orders.
ReactJS for the frontend and NodeJS for the backend. 
The backend will provide
two APIs:
One to fetch product data and another to place orders.
Then frontend will show UI and all activity for products

# To start frontend

cd /frontend->npm i->npm start

# To start backend

cd /backend->npm i->npm start

# Folder structure for backend

src-> controller # Contains all main logic for API

src-> product-data # Array of product data

src->routes # Contains all product and order routes

server.js # Server configuration

# Folder structure for frontend

src
components

CartPage.js # Handles data for placing orders and displaying cart data

ProductCard.js # Displays individual products

ProductList.js # Fetches and displays all products using the API

|--App.js # called the component three and main file to executes

# Libraries
# Backend

express
body-parser
cors

# Frontend

axios (for making API calls to the backend)
