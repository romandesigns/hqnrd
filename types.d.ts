export type ShareDataTypes = {
  className?: string;
  iconColor?: string;
  data: {
    title: string;
    text: string;
    url: string;
  };
};

export type SectionTypes = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
};
