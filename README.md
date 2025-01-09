# Documentation - KATA Online Bookstore Frontend

## Installing node_modules to your React app:

- In the command line run: `npm i`

## To run the application:

- Create a .env file in the root of the project

- Make sure you add the user to the DB by following the steps in the back-end `README.md` file

- after creating the user, in the .env file add the following:

	`VITE_API_USERNAME=yourusername`
	`VITE_API_PASSWORD=yourpassword`

- then in the command line: `npm run dev`

- Navigate to http://localhost:3000/books and refresh by clicking the Fetch Books button

## N.B: the app may display in the console the same response twice

This is due to the use of `<StrictMode></StrictMode>` being used in `main.jsx`