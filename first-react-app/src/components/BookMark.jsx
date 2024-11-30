import React from "react";

const BookMark = ({ bookMark }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold">{bookMark.title}</h2>
    </div>
  );
};

export default BookMark;
