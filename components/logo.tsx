import Image from "next/image";
import { Menu } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex gap-4 items-center">
      <Menu className="w-7 h-7 lg:hidden" />
      <div className="hidden lg:block">
        <Image src="/logo.svg" alt="logo" width={230} height={230} />
      </div>
      <div className="lg:hidden">
        <Image src="/logo.svg" alt="logo" width={170} height={170} />
      </div>
    </div>
  );
};

export default Logo;
