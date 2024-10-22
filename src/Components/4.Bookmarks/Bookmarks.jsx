import PropTypes from "prop-types";
import Bookmark from "../5.BookMark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="w-[550px] rounded-xl bg-slate-100 mb-20">
      <h1 className="text-2xl font-black mt-4 text-center">
        Bookmarked Blogs : {bookmarks.length}{" "}
      </h1>

      <div className="divider px-4"></div>
      <div>
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};

export default Bookmarks;
