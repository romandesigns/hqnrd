import { Brand } from "@/app/[lang]/ui/common";
import { OpenNavBtn } from "./OpenNavigationBtn";

export const DesktopNavbar = () => {
  return (
    <>
      <div className="flex items-center justify-between p-[0.35rem] px-3 bg-white shadow-md relative">
        <Brand className="text-neutral-400" />
        <OpenNavBtn />
      </div>
      <div className="bg-white/20 w-full h-1 backdrop-filter backdrop-blur-sm" />
    </>
  );
};
