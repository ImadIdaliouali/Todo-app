# Todo-app

Todo-app is a simple Todo list application built using Node.js and React.js. It allows users to create, delete, and complete their tasks.

## Getting Started

To get started with Todo-app, follow these steps:

1. Clone the repository to your local machine using git clone https://github.com/ImadIdaliouali/Todo-app.git.
1. Navigate to the project directory using cd Todo-app.
1. Navigate to the backend folder using cd backend and install the dependencies by running npm install.
1. Make sure that the .env file in the backend folder contains the following line, replacing "MONG_URI" with the connection string for your MongoDB Atlas cluster:
   `MONGO_URI="MONG_URI"`
1. Start the server by running npm run dev.
1. In a new terminal window, navigate to the frontend folder using cd ../frontend and install the dependencies by running npm install.
1. Start the client by running npm start.
1. Open your web browser and navigate to http://localhost:3000.

## Features

Todo-app comes with the following features:

- Create a new task by entering a title and description.
- Mark a task as complete.
- Delete a task.

## Technologies Used

Todo-app is built using the following technologies:

- Node.js
- Express
- React.js
- MongoDB
