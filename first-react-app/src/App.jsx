import { useState } from "react";
import Blogs from "./components/Blogs";
import BookMarks from "./components/BookMarks";
import Header from "./components/Header";

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const handleBookMark = (book) => {
    console.log(`book mark added`);
  };
  return (
    <div>
      <Header></Header>
      <div className="flex w-4/5 mx-auto gap-2">
        <Blogs handleBookMark={handleBookMark}></Blogs>
        <BookMarks></BookMarks>
      </div>
    </div>
  );
}

export default App;
