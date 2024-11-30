import React from "react";

const BookMarks = ({ bookMarks }) => {
  console.log(bookMarks);
  return (
    <div className="w-1/3">
      <h4>Book Mark blog: {bookMarks.length}</h4>
      <div>
        <h4>{bookMarks.title}</h4>
      </div>
    </div>
  );
};

export default BookMarks;
