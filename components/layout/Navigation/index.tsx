import { Brand } from "@/components/features";
import { Locale } from "@/i18n-config";
import { Wrapper } from "../container";

export function Navigation({ lang }: { lang: Locale }) {
  return (
    <nav className="border">
      <Wrapper>
        <Brand lang={lang} />
        <p>ComponentName</p>
      </Wrapper>
    </nav>
  );
}
