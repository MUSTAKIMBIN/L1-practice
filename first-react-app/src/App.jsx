import Blogs from "./components/Blogs";
import BookMarks from "./components/BookMarks";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <div className="flex">
        <Blogs></Blogs>
        <BookMarks></BookMarks>
      </div>
    </div>
  );
}

export default App;
