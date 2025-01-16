import { HeadingSection } from "@/components/features/site/Headings";
import { Content, Section } from "@/components/layout";
import { CardDiscount } from "../../../CardDiscount";
import { Button } from "@/components/ui/button";

export function Discount() {
  return (
    <Section sectionName="discounts">
      <Content className="gap-4 rounded-md border p-4 pt-8">
        <HeadingSection
          showBorders
          title="Exclusive Discounts"
          description="The longer you stay, the more you save!"
        />
        <Content className="grid grid-cols-2 grid-rows-[auto] gap-4">
          <CardDiscount highlight="Discount Available!" percentage={5} />
          <CardDiscount highlight="Discount Available" percentage={8} />
        </Content>
        <div className="my-4 flex w-full justify-center py-4">
          <Button className="px-20">Contact us</Button>
        </div>
      </Content>
    </Section>
  );
}
