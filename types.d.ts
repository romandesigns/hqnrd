export interface CaredReviewProps {
  id: number;
  avatar: string;
  avatarAlt: string;
  author: string;
  comment: string;
  rating: number;
  servicesRating: {
    rooms: number;
    location: number;
    service: number;
  };
}


export const roomCategories = {
  "basicas": {
    slug: "basicas",
    label: "Basica"
  }, "doble-camas": {
    slug: "doble-camas",
    label: "Doble Cama"
  }, "ejecutivas": {
    slug: "ejecutivas",
    label: "Ejecutiva"
  }, "standards": {
    slug: "standards",
    label: "Standard"
  }, "dobles": {
    slug: "dobles",
    label: "Doble"
  }, "familiares": {
    slug: "familiares",
    label: "Familiar"
  }
};
