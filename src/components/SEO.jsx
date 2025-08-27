import { Helmet } from "react-helmet";

const SEO = ({
  title,
  description,
  keywords,
  robots = "index, follow",
  canonical,
  openGraph = {},
  twitter = {},
  structuredData,
}) => {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {robots && <meta name="robots" content={robots} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {openGraph.title && <meta property="og:title" content={openGraph.title} />}
      {openGraph.description && (
        <meta property="og:description" content={openGraph.description} />
      )}
      {openGraph.type && <meta property="og:type" content={openGraph.type} />}
      {openGraph.url && <meta property="og:url" content={openGraph.url} />}
      {openGraph.image && <meta property="og:image" content={openGraph.image} />}
      {twitter.card && <meta name="twitter:card" content={twitter.card} />}
      {twitter.site && <meta name="twitter:site" content={twitter.site} />}
      {twitter.title && <meta name="twitter:title" content={twitter.title} />}
      {twitter.description && (
        <meta name="twitter:description" content={twitter.description} />
      )}
      {twitter.image && <meta name="twitter:image" content={twitter.image} />}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;