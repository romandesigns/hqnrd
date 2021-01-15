export const media = {
  mobile: (...args) => {
    return `@media (min-width:0px) and (max-width:36rem) {
            ${args};
        }`;
  },
  tablet: (...args) => {
    return `@media (min-width:36rem) and (max-width:62rem) {
            ${args};
        }`;
  },
  laptop: (...args) => {
    return `@media (min-width:62rem) and (max-width:82rem) {
            ${args};
        }`;
  },
  desktop: (...args) => {
    return `@media (min-width:82rem) {
            ${args};
        }`;
  },
};
