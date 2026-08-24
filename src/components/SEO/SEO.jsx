import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "KAIN Instruments - Precision Engineering Solutions",
  description = "KAIN Instruments provides high-quality mechanical and electrical instruments for industrial applications. Pan-India delivery, ISO certified.",
  keywords = "industrial instruments, mechanical instruments, electrical instruments, precision engineering, industrial equipment",
  image = "/kain-og-image.jpg",
  url = "https://kaininstruments.com",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional */}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
