import React from "react";

const BookMark = ({ bookMark }) => {
  return (
    <div className="bg-gray-200 rounded-xl my-2 p-3">
      <h2 className="text-xl font-semibold">{bookMark.title}</h2>
    </div>
  );
};

export default BookMark;
