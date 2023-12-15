import Links from "./links";
import Trending from "./trending";

const SideBar = async () => {
  return (
    <div className="w-full lg:w-4/12">
      <Trending />
      <Links />
    </div>
  );
};

export default SideBar;
