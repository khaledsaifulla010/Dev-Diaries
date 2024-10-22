import profile from "../../assets/images/profile.png";

const Headers = () => {
  return (
    <div>
      <div className="navbar bg-base-100 px-28 mt-8">
        <div className="navbar-start">
          <a className=" text-3xl font-bold">Dev Diaries</a>
        </div>
        <div className="navbar-end">
          <img src={profile} />
        </div>
      </div>
      <div className="divider px-24"></div>
    </div>
  );
};

export default Headers;
