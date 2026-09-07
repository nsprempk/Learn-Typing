import { Helmet } from "react-helmet-async";
const SITE_NAME = "Type Master";
const SITE_URL = "https://learntyping.site";
export default function SEO({
  title,
  description,
  path = "/",
  image = "/og-image.png",
  noIndex = false,
  keywords = "",
  type = "website",
}) {
  const normalizedPath =
    path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  const canonicalUrl = `${SITE_URL}${normalizedPath}`;
  const fullTitle = title === SITE_NAME ? SITE_NAME : `${title} | ${SITE_NAME}`;
  const robotsContent = noIndex ? "noindex, nofollow" : "index, follow";
  return (
    <Helmet>
      {" "}
      {/* Basic SEO */} <title>{fullTitle}</title>{" "}
      <meta name="description" content={description} />{" "}
      {keywords && <meta name="keywords" content={keywords} />}{" "}
      <meta name="robots" content={robotsContent} />{" "}
      <link rel="canonical" href={canonicalUrl} /> {/* Open Graph */}{" "}
      <meta property="og:site_name" content={SITE_NAME} />{" "}
      <meta property="og:title" content={fullTitle} />{" "}
      <meta property="og:description" content={description} />{" "}
      <meta property="og:type" content={type} />{" "}
      <meta property="og:url" content={canonicalUrl} />{" "}
      <meta property="og:image" content={`${SITE_URL}${image}`} />{" "}
      <meta property="og:image:alt" content={`${SITE_NAME} - ${title}`} />{" "}
      <meta property="og:locale" content="en_US" /> {/* Twitter */}{" "}
      <meta name="twitter:card" content="summary_large_image" />{" "}
      <meta name="twitter:title" content={fullTitle} />{" "}
      <meta name="twitter:description" content={description} />{" "}
      <meta name="twitter:image" content={`${SITE_URL}${image}`} />{" "}
      <meta name="twitter:image:alt" content={`${SITE_NAME} - ${title}`} />{" "}
    </Helmet>
  );
}
