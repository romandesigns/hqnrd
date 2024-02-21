export type ShareDataPropTypes = {
  className?: string;
  iconColor?: string;
  data: {
    title: string;
    text: string;
    url: string;
  };
};

export type SectionPropTypes = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
};

export type TestimonialPropTypes = {
  reviewerName: string;
  description: string;
  rating: string;
  review: { rooms: number; service: number; location: number }[];
};
