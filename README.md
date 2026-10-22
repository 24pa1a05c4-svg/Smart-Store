# Smart Store

Smart Store is a simple e-commerce web application built with Node.js, Express.js, MongoDB, HTML, CSS, and JavaScript.

## Features

- User registration and login
- Product listing and category filtering
- Product search and sorting
- Shopping cart management
- Order placement and checkout
- MongoDB database integration
- REST APIs for authentication, products, carts, and orders

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **ODM:** Mongoose
- **Authentication:** JSON Web Tokens (JWT), bcrypt
- **Deployment:** Render
- **API Testing:** Postman

## Project Structure

```text
Smart-Store/
├── client/
│   ├── index.html
│   ├── products.html
│   ├── product.html
│   ├── cart.html
│   ├── checkout.html
│   ├── login.html
│   ├── register.html
│   ├── order-success.html
│   └── css/
│       └── style.css
├── config/
│   └── db.js
├── controllers/
├── middleware/
├── models/
├── routes/
├── seedProducts.js
├── server.js
├── package.json
├── .gitignore
└── README.md
```

## Prerequisites

Install the following before running the project:

- Node.js and npm
- MongoDB Atlas account or a local MongoDB server
- Git (optional)

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/24pa1a05c4-svg/Smart-Store.git
cd Smart-Store
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root and add:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret
NODE_ENV=development
```

Replace the placeholder values with your actual configuration. Never upload your `.env` file or share your database credentials.

### 4. Add sample products

Ensure MongoDB is configured and your computer's IP address is permitted in MongoDB Atlas Network Access.

Run:

```bash
node seedProducts.js
```

This script inserts sample products into your database. Review the script before running it again because it may delete existing products.

### 5. Start the server

```bash
node server.js
```

The server should start on the configured port and connect to MongoDB.

## Running the Application

Open the following URLs in your browser after starting the server:

- Home: `http://localhost:3000/`
- Products: `http://localhost:3000/products.html`
- Cart: `http://localhost:3000/cart.html`
- Login: `http://localhost:3000/login.html`
- Register: `http://localhost:3000/register.html`

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Authenticate a user |
| GET | `/api/products` | Retrieve products |
| Cart routes | `/api/cart` | Manage cart items |
| Order routes | `/api/orders` | Manage orders |

Refer to the corresponding route files for the complete endpoints and required request data.

## Deployment

The application can be deployed using Render.

1. Push the project to GitHub.
2. Create a Web Service in Render and connect the repository.
3. Set the build command to `npm install`.
4. Set the start command to `node server.js`.
5. Configure `MONGO_URI`, `JWT_SECRET`, and other required environment variables in Render.
6. Configure MongoDB Atlas Network Access to allow connections from the deployed service.
7. Deploy the application and check the logs and API responses.

## Security

- Keep `.env` out of Git.
- Use a strong JWT secret.
- Give the database user only the permissions required by the application.
- Restrict database network access appropriately.
- Never publish passwords, access tokens, or private connection strings.

## Author

Smart Store — E-commerce Web Application

## License

This project was developed for educational purposes.
