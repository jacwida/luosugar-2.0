import Logo from "./logo";
import MenuItems from "./menu-items";
import SearchMenu from "./serachmenu";

const Header = () => {
  return (
    <div className=" w-full  border-b-[1px]">
      <div className="w-full flex max-w-[96rem]  py-3 px-1 lg:px-4 mx-auto justify-between items-center">
        <Logo />
        <MenuItems />
        <SearchMenu />
      </div>
    </div>
  );
};

export default Header;
