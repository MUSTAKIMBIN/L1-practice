import React from "react";
import BookMark from "./BookMark";

const BookMarks = ({ bookMarks, times }) => {
  console.log(bookMarks);
  return (
    <div className="w-1/3">
      <h4 className="text-lg font-semibold">
        Book Mark blog: {bookMarks.length}
      </h4>
      <h4 className="text-lg font-semibold">
        Toatal Reading Time: {times} min
      </h4>
      <div className="bg-slate-300 p-4">
        {bookMarks.map((bookMark) => (
          <BookMark bookMark={bookMark}></BookMark>
        ))}
      </div>
    </div>
  );
};

export default BookMarks;
