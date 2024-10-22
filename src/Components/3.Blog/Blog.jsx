import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog }) => {
  const {
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
      <div className="card card-compact bg-base-100 w-[700px] border-4 shadow-xl">
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
              <FaBookmark className="text-base mt-1"></FaBookmark>
            </div>
          </div>
          <div>
            <h1 className="text-3xl mt-6 font-black">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
