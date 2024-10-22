import { useState } from "react";
import "./App.css";
import Headers from "./Components/1.Headers/Headers";
import Blogs from "./Components/2.Blogs/Blogs";
import Bookmarks from "./Components/4.Bookmarks/Bookmarks";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const [spentTimes, setSpentTimes] = useState(0);

  const handleAddSpentTimes = (time, id) => {
    const newSpentTimes = spentTimes + time;

    setSpentTimes(newSpentTimes);
    console.log("remove", id);

    // Remove Bookmark

    const remainingBookMarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookMarks);
  };

  return (
    <>
      <Headers></Headers>

      <div className="flex justify-between px-28 mt-12">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleAddSpentTimes={handleAddSpentTimes}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} spentTimes={spentTimes}></Bookmarks>
      </div>
    </>
  );
}

export default App;
