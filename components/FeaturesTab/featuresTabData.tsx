import { FeatureTab } from "@/types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Manage Your Workflow and Sales Pipeline",
    desc1: `Utilize our built-in Pipeline Management feature to monitor leads and track their progress through each stage of the sales funnel.`,
    imageDark: "/images/hero/hero-dark.svg",
    image: "/images/hero/hero-light.svg",
    desc2: "",
  },
  {
    id: "tabTwo",
    title: "Comprehensive Analytics and Reporting",
    desc2: "",
    desc1: `Our dashboard provides a complete overview of lead status and revenue generated at each phase, allowing you to make informed decisions and optimize your strategies.`,
    imageDark: "/images/hero/hero-dark.svg",
    image: "/images/hero/hero-light.svg",
  },
  {
    id: "tabThree",
    title: "Collect Customer Payments Seamlessly",
    desc1: `Integrated with Stripe, Txtli enables you to collect payments directly through your websites, funnels, and even appointment bookings.`,
    desc2: "",
    imageDark: "/images/hero/hero-dark.svg",
    image: "/images/hero/hero-light.svg",
  },
];

export default featuresTabData;
