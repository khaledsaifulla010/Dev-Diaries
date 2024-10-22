import PropTypes from "prop-types";

const Bookmark = ({ bookmark, index }) => {
  const { title } = bookmark;
  return (
    <div className=" bg-white p-4 m-4 rounded-xl">
      <h1 className="text-xl font-bold">
        {" "}
        {index + 1}. {title}
      </h1>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default Bookmark;
