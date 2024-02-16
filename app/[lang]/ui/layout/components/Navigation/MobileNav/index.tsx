import { Container } from "rsuite";
import { MobileNavLogo } from "./Brand";
import { MobileNavHeader } from "./Header";
import { MobileNavMenu } from "./Menu";

export const MobileNavigation = () => {
  return (
    <Container className="grid grid-cols-1 grid-rows-[auto_1fr_2fr] fixed top-0 bottom-0 right-0 left-0 bg-white h-full w-full z-10">
      <MobileNavHeader />
      <MobileNavLogo />
      <MobileNavMenu />
    </Container>
  );
};
