import { Organization, Service, WebSite, WithContext } from "schema-dts";

export const siteSchema: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "InfoBluera",
    url: "https://infobluera.com",
    description: "Premium IT Solutions including Web, Mobile and Enterprise Software Development.",
    publisher: {
        "@type": "Organization",
        name: "InfoBluera",
        logo: {
            "@type": "ImageObject",
            url: "https://infobluera.com/logo.png",
        },
    },
};

export const organizationSchema: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "InfoBluera",
    url: "https://infobluera.com",
    logo: "https://infobluera.com/logo.png",
    contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-98478-65571",
        contactType: "customer service",
        email: "codelinehelpdesk@gmail.com",
        availableLanguage: ["English", "Malayalam"],
    },
    address: {
        "@type": "PostalAddress",
        addressLocality: "Kerala",
        addressCountry: "India",
    },
    sameAs: [
        "https://linkedin.com/company/infobluera",
        "https://twitter.com/infobluera",
        "https://instagram.com/infobluera",
        "https://github.com/infobluera",
    ],
};

const SERVICES = [
    "Mobile App Development",
    "Web Application Development",
    "AI & Automation Solutions",
    "Cloud & Infrastructure",
    "UI/UX Design",
    "MVP Development"
];

export const servicesSchema: WithContext<Service>[] = SERVICES.map(service => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service,
    provider: {
        "@type": "Organization",
        name: "InfoBluera"
    }
}));
