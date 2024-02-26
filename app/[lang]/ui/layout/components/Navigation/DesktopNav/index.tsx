import { Brand } from "@/app/[lang]/ui/common";
import { Menu } from "./Menu";
import { OpenNavBtn } from "./OpenNavigationBtn";

export const DesktopNavbar = () => {
  return (
    <>
      <div className="flex items-center justify-center px-3 bg-white shadow-md relative">
        <div className="p-[0.35rem] w-full md:max-w-7xl md:mx-auto flex items-center justify-between">
          <Brand className="text-neutral-400" />
          <OpenNavBtn className="md:hidden" />
          <Menu className="space-x-4 hidden md:flex" />
        </div>
      </div>
      <div className="bg-white/20 w-full h-1 backdrop-filter backdrop-blur-sm" />
    </>
  );
};
