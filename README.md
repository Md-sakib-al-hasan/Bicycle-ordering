# Bicycle Ordering API

This project provides a RESTful API for managing bicycles, orders, and inventory for an e-commerce application. It includes features like creating orders, managing product inventory, and validating requests using Mongoose and Zod.

---

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [License](#license)

---

## Features
- **Product Management**: Create, update, delete, and fetch bicycle details.
- **Order Management**: Place and validate orders with automatic inventory updates.
- **Validation**: Schema validation using Zod to ensure request data integrity.
- **Database**: MongoDB integration with Mongoose models and schema hooks.
- **Error Handling**: Middleware-based error handling for consistent API responses.

---

## Technologies
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Validation**: Zod
- **TypeScript**: Ensures type safety across the application

---

## Installation

### Prerequisites
1. Node.js (v14 or later)
2. MongoDB (local or cloud instance)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Md-sakib-al-hasan/Bicycle-ordering.git
   
2. Install the project dependencies:
   ```bash
   npm install
3. Create a `.env` file in the root directory with the following environment variables:

   ```plaintext
   NODE_ENV=development
   # PORT=Specify the port number.
   PORT=5000
   # DATABASE_URL=URL to connect to the database
   DATABASE_URL=mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority
4. Start the server:
   ```bash
      npm run start


---

## Environment Variables

The application requires the following environment variables to be set in a .env file:

| Name      | Age | Country  |
|-----------|-----|----------|
| Alice     | 25  | USA      |
| Bob       | 30  | Canada   |
| Charlie   | 28  | UK       |
