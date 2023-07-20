# Car Inventory Dashboard with Firebase

![Car Inventory Dashboard](/path/to/your/car-inventory-dashboard-screenshot.png)

## Description

Car Inventory Dashboard is a web application built with ReactJS, Material-UI, and Data Grid components to manage a collection of cars. It allows users to view, add, update, and delete car records in the inventory through an intuitive dashboard interface.

## Features

- View a list of all cars in the inventory using a Data Grid component.
- Add new cars to the inventory with a user-friendly form using `react-hook-form`.
- Update existing car details directly from the dashboard.
- Delete cars from the inventory with a simple click.
- Sign In and Sign Up functionality using Google Firebase Authentication.
- Interactive Map to display car locations on a map.

## Technologies Used

- Frontend: ReactJS, Material-UI, Data Grid (`@mui/x-data-grid`), `react-hook-form`, React Leaflet, Leaflet
- Backend: Node.js, Express.js, MongoDB (or any backend and database of your choice)
- Authentication: Google Firebase Authentication

## Prerequisites

- Node.js and npm installed on your machine.
- MongoDB instance set up and running for the backend (if using MongoDB).
- Firebase project and Firebase Authentication enabled.

## Installation

1. Clone the repository.

```bash
git clone https://github.com/HussainAther/CarInventoryDashboard.git
cd CarInventoryDashboard
```

2. Set Up the Frontend Dependencies
```bash
cd client
npm install
```

3. Set Up the Backend Dependencies
```bash
cd ../server
npm install
```

4. Go to the Firebase Console, create a new project, and enable the Authentication service.

* Obtain the Firebase project's configuration details.
* Update the firebaseConfig object in src/firebase.js with your Firebase project's configuration.

## Usage
1. Start the Frontend Development Server
```bash
cd client
npm start
```

2. Access the car inventory dashboard at http://localhost:3000 (or the given URL) in your web browser.

## Start the Backend Server

```bash
cd server
npm start
```

The backend server will run at http://localhost:5000.

Use the form to add new cars, update existing car details, and delete cars from the inventory directly from the dashboard.

## API URL
The frontend application makes API calls to the backend server. The default API URL is set to http://localhost:5000 for development. If you are hosting the backend on a different server or port, you can update the serverCalls.get function in CarList.js to the appropriate URL in src/api.js.

## License
This project is licensed under the MIT License.