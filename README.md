# 💸 Razorpay Payment Integration
👉 [Click here](https://helpful-pegasus-7dc6cc.netlify.app/) to check the live application.


## 📦 Prerequisites
Before setting up the project, make sure you have the following installed:

* [Node.js](https://nodejs.org/en) (v14.x or higher)
* [MongoDB](https://www.mongodb.com/try/download/community) (Make sure MongoDB is running on your local machine) or [MongoAtlas](https://www.mongodb.com/products/platform/atlas-database) (use cloud MongoDB Atlas)

## 🚀 Getting Started
### 1. Clone the Repository
```
https://github.com/Kabileesh/Razorpay_Integration_Task.git
```

### 2. Install Dependencies
For both backend and frontend, you need to install the dependencies:

For backend:
```
cd .\backend
npm i
```
For Frontend:
```
cd .\frontend
npm i
```

### 3. Setup Environment Variables
Create a `.env` file in the **backend** and **frontend** directory and set up the following variables:

For Backend:
```
MONGO_URI = "YOUR MONGODB URI"
PORT = 5000
MY_KEY_ID = "YOUR RAZORPAY KEYID"
MY_KEY_SECRET = "YOUR RAZORPAY SECRET"
```
For Frontend:
```
REACT_APP_MY_KEY_ID = "YOUR RAZORPAY KEYID"
REACT_APP_BASE_URL = "YOUR BACKEND URL"
```

### 4. Start the Application
Once all dependencies are installed and environment variables are set, you can start the server and client.
* **Start the Server:**
  ```
  cd .\backend
  npm start
  ```
The server should now be running on http://localhost:5000.
* **Start the client:**
  ```
  cd .\frontend
  npm start
  ```
The client should now be running on http://localhost:3000


## ⚙️ Available Scripts
In both the `frontend` and `backend` directories, you can run the following scripts:

* `npm start`: Starts the application in development mode
* `npm run build`: Builds the React app for production
