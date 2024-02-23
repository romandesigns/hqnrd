import data from "@/public/assets/data/fqa.json";
import { Panel, PanelGroup } from "rsuite";
import { Section } from "../../../../containers";

export const FrequentlyAskedQuestions = () => {
  return (
    <Section className="w-full max-w-7xl">
      <h2 className="text-2xl my-8">Frequently Asked Questions</h2>
      <PanelGroup
        accordion
        bordered
        defaultActiveKey={0}
        className="w-full text-sm [&_.rs-panel-header]:font-regular [&_.rs-panel-title]:text-[0.85rem] [&_.rs-panel-title]:font-semibold"
      >
        {data.fqa.map((item, index) => (
          <Panel
            key={index}
            header={item.question}
            className="text-left "
            eventKey={index}
          >
            {item.answer}
          </Panel>
        ))}
      </PanelGroup>
    </Section>
  );
};
