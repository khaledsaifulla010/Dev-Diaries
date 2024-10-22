import PropTypes from "prop-types";
import Bookmark from "../5.BookMark/Bookmark";

const Bookmarks = ({ bookmarks, spentTimes }) => {
  return (
    <div className="mb-44">
      <h1 className="text-2xl font-black  text-center bg-violet-200 p-4 rounded-xl text-violet-700 border-transparent border-2">
        Spent Time on Read : {spentTimes} min
      </h1>
      <div className="w-[550px] h-full rounded-xl bg-slate-100 p-4 mt-4">
        <h1 className="text-2xl font-black mt-4 text-center">
          Bookmarked Blogs : {bookmarks.length}
        </h1>

        <div className="divider px-4"></div>
        <div>
          {bookmarks.map((bookmark) => (
            <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
          ))}
        </div>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  spentTimes: PropTypes.number.isRequired,
};

export default Bookmarks;
