import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HeadingSection } from "../Headings";
import { Content, Section } from "@/components/layout";

export function Fqa() {
  return (
    <Section sectionName="max-w-6xl">
      <HeadingSection
        title="Frequently Asked Questions"
        description="Find answers to common questions about our services."
      />
      <Content>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem key={1} value={"1"}>
            <AccordionTrigger>
              <p className="sm:text-md text-left text-xs">
                Do you provide water
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <p className="sm:text-md text-left text-xs">
                Of course, we provide water in our hallways
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Content>
    </Section>
  );
}
