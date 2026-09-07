interface PersonJsonLdProps {
  type?: "Person";
}

interface CreativeWorkJsonLdProps {
  type: "CreativeWork";
  name: string;
  description: string;
  url: string;
  keywords: string[];
}

interface ProfilePageJsonLdProps {
  type: "ProfilePage";
  url: string;
}

type JsonLdProps = PersonJsonLdProps | CreativeWorkJsonLdProps | ProfilePageJsonLdProps;

export default function JsonLd(props: JsonLdProps) {
  let schemaData: Record<string, unknown>;

  if (props.type === "CreativeWork") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: props.name,
      description: props.description,
      url: props.url,
      author: {
        "@type": "Person",
        name: "Sándor Kardos",
        url: "https://sandorkardos.com"
      },
      keywords: props.keywords.join(", ")
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
        sameAs: [
          "https://www.linkedin.com/in/sandor-kardos/",
          "https://github.com/sandor-kardos"
        ],
        knowsAbout: [
          "User Experience Design",
          "Service Design",
          "Product Design",
          "Design Research"
        ]
      }
    };
  } else {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Sándor Kardos",
      jobTitle: "Product, UX and Service Designer",
      url: "https://sandorkardos.com",
      sameAs: [
        "https://www.linkedin.com/in/sandor-kardos/",
        "https://github.com/sandor-kardos"
      ],
      knowsAbout: [
        "User Experience Design",
        "Service Design",
        "Product Design",
        "Design Research"
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
