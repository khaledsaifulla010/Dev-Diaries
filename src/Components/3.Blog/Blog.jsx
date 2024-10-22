import { FaBookmark } from "react-icons/fa";

import PropTypes from "prop-types";

const Blog = ({ blog, handleAddToBookmark, handleAddSpentTimes }) => {
  const {
    id,
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div>
      <div className="card card-compact w-[700px] border-2 ">
        <figure>
          <img className="bg-cover w-full" src={cover} />
        </figure>
        <div className="card-body">
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-4">
              <img className="w-12" src={author_img} />
              <div>
                <h3 className="text-lg font-bold">{author}</h3>
                <h4 className="text-base font-semibold text-slate-500">
                  {posted_date}
                </h4>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-semibold text-slate-500">
                {reading_time} min read
              </h3>
              <button onClick={() => handleAddToBookmark(blog)}>
                <FaBookmark className="text-base mt-1"></FaBookmark>
              </button>
            </div>
          </div>
          <div>
            <h1 className="text-3xl mt-6 font-black">{title}</h1>
          </div>
          <div className="flex items-center text-lg font-semibold text-slate-500 mt-4 gap-4">
            <h3>#{hashtags[0]}</h3>
            <h3> # {hashtags[1]}</h3>
          </div>
          <button
            onClick={() => handleAddSpentTimes(reading_time, id)}
            className="underline text-violet-500 text-base font-semibold mr-[550px]"
          >
            Mark as read
          </button>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleAddSpentTimes: PropTypes.func.isRequired,
};

export default Blog;
