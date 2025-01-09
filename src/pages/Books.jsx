import React, { useEffect, useState } from "react";

import BookCard from "../components/BookCard";

import axios from "axios";

function Books() {

  const [allBooks, setAllBooks] = useState([]);

    // using axios to fetch from the bookstore-backend using HTTP GET method 
    // and return all the books found in the DB
    const fetchAllBooks = () => {
        axios
          .get("http://localhost:8080/api/books", {
            auth: {
                username: import.meta.env.VITE_API_USERNAME,
                password: import.meta.env.VITE_API_PASSWORD
            }
          })
          .then((response) => {
            setAllBooks(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
      // fetch all books on inital load of the page
      useEffect(() => {
        fetchAllBooks();
      }, []);
  return (
    <>
    <div className="main flex flex-col justify-center">
        <div className="my-6 text-center">
          <button
            onClick={() => fetchAllBooks()}
            className="py-2 px-6 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow"
          >
            Fetch Books
          </button>
        </div>
        <BookCard allBooks={allBooks} />
      </div>
      </>
  )
}

export default Books