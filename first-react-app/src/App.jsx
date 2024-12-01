import { useState } from "react";
import Blogs from "./components/Blogs";
import BookMarks from "./components/BookMarks";
import Header from "./components/Header";

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [times, setTime] = useState(0);
  const handleBookMark = (book) => {
    const newBookMarks = [...bookMarks, book];
    setBookMarks(newBookMarks);
  };
  const handleTime = (time) => {
    setTime(times + time);
  };
  return (
    <div>
      <Header></Header>
      <div className="flex w-4/5 mx-auto gap-2">
        <Blogs handleTime={handleTime} handleBookMark={handleBookMark}></Blogs>
        <BookMarks times={times} bookMarks={bookMarks}></BookMarks>
      </div>
    </div>
  );
}

export default App;
