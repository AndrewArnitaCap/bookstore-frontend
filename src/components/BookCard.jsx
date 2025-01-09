import React from "react";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BookCard({allBooks}) {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        theme="dark"
      />
      {allBooks?.map((book) => (
        <div
          key={book.bookId}
          className="w-96 h-50 max-w-2xl mx-auto p-4 border-solid border-2 border-gray-50 rounded-xl mb-12"
        >
          <div className="flex flex-col">
            <span className="block text-lg text-white">Book ID: {book.bookId}</span>
            <div className="flex flex-row justify-between p-2 gap-4">
              <div className="flex flex-col gap-3">
                <span className="block text-xl text-white font-semibold">
                  {book.title}
                </span>
                <span className="block text-lg text-white">{book.author}</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-green-600 text-md border rounded-lg p-4 font-bold bg-white hover:bg-gray-100">
                  {book.price} €
                </span>
              </div>
            </div>
            <button
              className="mt-4 py-2 px-6 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow"
            >
              + Add to cart
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default BookCard;
