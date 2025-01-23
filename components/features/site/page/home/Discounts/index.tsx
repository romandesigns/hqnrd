import { HeadingSection } from "@/components/features/site/Headings";
import { Content, Section } from "@/components/layout";
import { CardDiscount } from "./CardDiscount";
import { Button } from "@/components/ui/button";

export function Discounts() {
  return (
    <Section sectionName="discounts">
      <Content className="gap-4 rounded-md border p-1 pt-8 md:p-4">
        <HeadingSection
          title="Exclusive Discounts"
          description="The longer you stay, the more you save!"
        />
        <Content className="grid grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-1">
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
