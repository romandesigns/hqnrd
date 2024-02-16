import { MotionMobileNavigation } from "../../motion";
import { DesktopNavbar } from "./DesktopNav";
import { MobileNavigation } from "./MobileNav";

export const Navigation = () => {
  return (
    <nav className="sticky top-0 z-[3]">
      <DesktopNavbar />
      <MotionMobileNavigation>
        <MobileNavigation />
      </MotionMobileNavigation>
    </nav>
  );
};
