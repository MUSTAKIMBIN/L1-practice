import React from "react";
import BookMark from "./BookMark";

const BookMarks = ({ bookMarks }) => {
  console.log(bookMarks);
  return (
    <div className="w-1/3">
      <h4>Book Mark blog: {bookMarks.length}</h4>
      <div>
        {bookMarks.map((bookMark) => (
          <BookMark bookMark={bookMark}></BookMark>
        ))}
      </div>
    </div>
  );
};

export default BookMarks;
