// import required modules
import {
  FaLocationDot,
  IoLogoWhatsapp,
  MdGTranslate,
} from "@/app/[lang]/ui/icons";
import { ButtonToolbar, IconButton } from "rsuite";

export function UtilitiesIcons() {
  return (
    <ButtonToolbar className="md:mt-4 hidden md:flex  md:mb-10">
      <IconButton
        size="md"
        appearance="primary"
        color="blue"
        active
        icon={<FaLocationDot />}
      />
      <IconButton
        size="md"
        appearance="primary"
        color="green"
        active
        icon={<IoLogoWhatsapp />}
      />
      <IconButton
        size="md"
        appearance="default"
        active
        icon={<MdGTranslate />}
      />
    </ButtonToolbar>
  );
}
