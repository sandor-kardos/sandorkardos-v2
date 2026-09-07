interface PersonJsonLdProps {
  type?: "Person";
}

interface CreativeWorkJsonLdProps {
  type: "CreativeWork";
  name: string;
  description: string;
  url: string;
  image?: string;
  keywords: string[];
}

interface ProfilePageJsonLdProps {
  type: "ProfilePage";
  url: string;
}

interface BreadcrumbJsonLdProps {
  type: "BreadcrumbList";
  items: { name: string; item: string }[];
}

interface WebSiteJsonLdProps {
  type: "WebSite";
  url: string;
  name: string;
  description: string;
}

type JsonLdProps =
  | PersonJsonLdProps
  | CreativeWorkJsonLdProps
  | ProfilePageJsonLdProps
  | BreadcrumbJsonLdProps
  | WebSiteJsonLdProps;

export default function JsonLd(props: JsonLdProps) {
  let schemaData: Record<string, unknown>;

  if (props.type === "CreativeWork") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: props.name,
      headline: props.name,
      description: props.description,
      url: props.url,
      image: props.image
        ? props.image.startsWith("http")
          ? props.image
          : `https://sandorkardos.com${props.image}`
        : "https://sandorkardos.com/images/portrait.webp",
      author: {
        "@type": "Person",
        name: "Sándor Kardos",
        jobTitle: "Product, UX and Service Designer",
        url: "https://sandorkardos.com"
      },
      publisher: {
        "@type": "Person",
        name: "Sándor Kardos",
        url: "https://sandorkardos.com"
      },
      keywords: props.keywords.join(", "),
      inLanguage: "en-GB"
    };
  } else if (props.type === "BreadcrumbList") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: props.items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.item.startsWith("http") ? item.item : `https://sandorkardos.com${item.item}`
      }))
    };
  } else if (props.type === "WebSite") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: props.name,
      url: props.url,
      description: props.description,
      author: {
        "@type": "Person",
        name: "Sándor Kardos"
      },
      inLanguage: "en-GB"
    };
  } else if (props.type === "ProfilePage") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      url: props.url,
      mainEntity: {
        "@type": "Person",
        name: "Sándor Kardos",
        jobTitle: "Product, UX and Service Designer",
        url: "https://sandorkardos.com",
        image: "https://sandorkardos.com/images/portrait.webp",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Edinburgh",
          addressRegion: "Scotland",
          addressCountry: "GB"
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Edinburgh Napier University"
        },
        sameAs: [
          "https://www.linkedin.com/in/sandor-kardos/",
          "https://github.com/sandor-kardos"
        ],
        knowsAbout: [
          "User Experience Design",
          "Service Design",
          "Product Design",
          "Design Research",
          "Service Blueprinting",
          "User Journey Mapping",
          "Usability Testing",
          "Information Architecture"
        ]
      }
    };
  } else {
    // Default Person Schema with enhanced SEO attributes
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Sándor Kardos",
      jobTitle: "Product, UX and Service Designer",
      url: "https://sandorkardos.com",
      image: "https://sandorkardos.com/images/portrait.webp",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Edinburgh",
        addressRegion: "Scotland",
        addressCountry: "GB"
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Edinburgh Napier University"
      },
      sameAs: [
        "https://www.linkedin.com/in/sandor-kardos/",
        "https://github.com/sandor-kardos"
      ],
      knowsAbout: [
        "User Experience Design",
        "Service Design",
        "Product Design",
        "Design Research",
        "Service Blueprinting",
        "User Journey Mapping",
        "Usability Testing",
        "Information Architecture"
      ]
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
