import { Search } from "lucide-react";

const SearchMenu = () => {
  return (
    <div className="flex items-center 2xl:gap-6 gap-8">
      <div className="hidden lg:block">
        <Search className="w-5 h-5" />
      </div>
      <button className="hidden lg:block text-slate-600 font-semibold">
        Login
      </button>
      <button className="rounded-full text-white px-3 text-sm py-1 lg:py-2 bg-blue-600">
        Sign Up
      </button>
    </div>
  );
};

export default SearchMenu;
