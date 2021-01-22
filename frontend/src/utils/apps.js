//  Dependencies
import { Helmet } from "react-helmet";

export const MetaTags = ({ pageTitle, pageDescription, ogTitle, ogDescription, ogImagePath }) => {
  return (
    <Helmet>
      <meta name="description" content={pageDescription} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImagePath} />
      <meta property="og:title" content={ogTitle} />
      <title>{pageTitle} | Hotel Quinto Nivel RD</title>
    </Helmet>
  );
};
