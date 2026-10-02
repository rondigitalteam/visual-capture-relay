export type Filter = "All" | "Store Growth" | "Email" | "Branding" | "Technical" | "Paid Ads" | "Social Media" | "SEO";

export type PortfolioProject = {
  category: Exclude<Filter, "All">;
  title: string;
  client: string;
  platform: string;
  timeline: string;
  challenge: string;
  solution: string;
  results: readonly { value: string; label: string; note: string }[];
  services: readonly string[];
  quote: string;
  attribution: string;
};

export const navigation = [
  ["About Us", "/about"],
  ["Portfolio", "/portfolio"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"],
] as const;

export const serviceOptions = ["SEO", "Website Design", "Email Marketing & Automation", "Traffic Optimization", "Conversion Optimization", "Branding & Customization", "Consultation", "Other"];

export const features = [
  ["Business-Focused", "We focus on solutions that support your actual business goals."],
  ["Customized Approach", "Your business is different, so your digital strategy should not be one-size-fits-all."],
  ["User-Friendly", "We create experiences that are simple for your customers to understand and use."],
  ["Results-Oriented", "Every solution is designed with visibility, engagement, and conversions in mind."],
] as const;

export const portfolioProjects: PortfolioProject[] = [
  {
    category: "Store Growth",
    title: "Complete Store Management",
    client: "Cross Toss Trading",
    platform: "Shopify",
    timeline: "Ongoing",
    challenge: "The client needed comprehensive store management to scale their e-commerce operations, increase traffic, and boost overall sales performance.",
    solution: "Implemented full store management including product optimization, traffic strategies, conversion optimization, and ongoing analytics monitoring to maximize revenue.",
    results: [
      { value: "5,260", label: "Sessions", note: "+177% increase" },
      { value: "$9,860", label: "Total Sales", note: "+55% growth" },
      { value: "100+", label: "Orders", note: "+56% increase" },
      { value: "1.81%", label: "Conversion Rate", note: "+80% improvement" },
    ],
    services: ["Store Management", "Traffic Optimization", "Sales Strategy", "Analytics"],
    quote: "Our store performance was transformed. The results speak for themselves — sales nearly doubled!",
    attribution: "Cross Toss Trading Team",
  },
  {
    category: "Email",
    title: "Email Marketing & Sales Growth",
    client: "Autumn Bliss Market",
    platform: "Shopify + Klaviyo",
    timeline: "Ongoing",
    challenge: "The health and beauty store needed a complete email marketing strategy to increase customer retention, recover abandoned carts, and drive consistent revenue from email campaigns.",
    solution: "Implemented comprehensive Klaviyo email flows including abandoned cart recovery, browse abandonment, customer winback, a welcome series, strategic campaigns, Google Tag Manager, and a full store audit.",
    results: [
      { value: "1,809", label: "Sessions", note: "+276% increase" },
      { value: "$1,835", label: "Total Sales", note: "+129% growth" },
      { value: "34", label: "Orders", note: "+55% increase" },
      { value: "100/100", label: "Store Audit", note: "SSL, mobile, content" },
    ],
    services: ["Klaviyo Email Flows", "Email Campaigns", "Google Tag Manager", "Store Audit", "Store Redesign"],
    quote: "The email automation is incredible. We're recovering sales we would have lost and customers love the personalized experience.",
    attribution: "Autumn Bliss Market Owner",
  },
  {
    category: "Branding",
    title: "German Pet Store Rebrand",
    client: "Haustierbedarf4You",
    platform: "Shopify",
    timeline: "4 weeks",
    challenge: "The German pet supply store needed a complete visual rebrand to better connect with pet owners and create a premium, trustworthy shopping experience.",
    solution: "Completed a store redesign with modern branding, an engaging pet-focused experience, German localization, multilingual support, and an optimized user journey.",
    results: [
      { value: "100%", label: "Brand Identity", note: "Complete rebrand" },
      { value: "Enhanced", label: "User Experience", note: "Modern design" },
      { value: "Yes", label: "Mobile Ready", note: "Fully responsive" },
      { value: "German", label: "Localization", note: "Native language support" },
    ],
    services: ["Store Rebrand", "Visual Design", "UX Optimization", "Localization"],
    quote: "Die Besten Produkte für Pelzige Freunde — Our new store perfectly captures our brand mission!",
    attribution: "Oliver Ormans, Owner",
  },
  {
    category: "Technical",
    title: "SSL Certificate Fix & Security",
    client: "XIT Offroad",
    platform: "E-commerce",
    timeline: "1 week",
    challenge: "The client's e-commerce store was showing SSL certificate errors, causing browser warnings that scared away customers and hurt SEO rankings.",
    solution: "Completed SSL setup and verification, including certificate parsing, chain of trust, domain validation, cipher suite negotiation, and redirect configuration.",
    results: [
      { value: "Verified", label: "SSL Status", note: "Fully secured" },
      { value: "SHA-256", label: "Certificate", note: "Industry standard" },
      { value: "100%", label: "Browser Trust", note: "No warnings" },
      { value: "Restored", label: "SEO Impact", note: "HTTPS ranking boost" },
    ],
    services: ["SSL Certificate Setup", "Security Configuration", "Domain Verification", "Technical Fixes"],
    quote: "Our customers can now shop with confidence. No more security warnings — just smooth, secure checkout.",
    attribution: "XIT Offroad Team",
  },
  {
    category: "Paid Ads",
    title: "Google Ads Campaign Management",
    client: "Soma Dental",
    platform: "Google Ads",
    timeline: "Ongoing",
    challenge: "The dental practice needed to increase patient bookings through targeted paid advertising while maintaining an efficient cost per acquisition.",
    solution: "Implemented strategic Google Ads campaigns with optimized targeting, compelling ad copy, and conversion tracking to maximize ROI and drive quality leads.",
    results: [
      { value: "1,598", label: "Conversions", note: "New patient leads" },
      { value: "21.68%", label: "Conversion Rate", note: "Above industry average" },
      { value: "1,829", label: "Clicks", note: "Qualified traffic" },
      { value: "$204.94", label: "Cost / Conversion", note: "Efficient CPA" },
    ],
    services: ["Google Ads Management", "Campaign Optimization", "Conversion Tracking", "Ad Copywriting"],
    quote: "Our patient bookings have skyrocketed since launching these Google Ads campaigns.",
    attribution: "Soma Dental Team",
  },
  {
    category: "Social Media",
    title: "Social Media Advertising",
    client: "Tropix Beverages",
    platform: "Facebook & Instagram Ads",
    timeline: "3 months",
    challenge: "The beverage brand needed to expand its reach and drive awareness across social platforms while maintaining cost efficiency.",
    solution: "Developed a Facebook and Instagram advertising strategy with audience targeting, creative optimization, and multi-platform distribution.",
    results: [
      { value: "175K", label: "Reach", note: "People reached" },
      { value: "144K", label: "Impressions", note: "Ad views" },
      { value: "1,027", label: "Clicks", note: "Engaged users" },
      { value: "$1.27", label: "Average CPC", note: "Cost efficient" },
    ],
    services: ["Facebook Ads", "Instagram Ads", "Audience Targeting", "Creative Strategy"],
    quote: "The reach we achieved with our advertising budget exceeded all expectations. Great ROI!",
    attribution: "Tropix Beverages Marketing Team",
  },
  {
    category: "SEO",
    title: "SEO Optimization",
    client: "Urban Pet Club",
    platform: "E-commerce",
    timeline: "Ongoing",
    challenge: "The pet supply store needed to improve organic search visibility and on-page SEO to drive more qualified traffic.",
    solution: "Conducted a comprehensive SEO audit and implemented on-page improvements across metadata, page structure, server configuration, and content quality.",
    results: [
      { value: "78%", label: "On-Page Score", note: "SEO health" },
      { value: "85%", label: "Meta Data", note: "Optimized" },
      { value: "92%", label: "Page Structure", note: "Well organized" },
      { value: "100%", label: "Server", note: "Fully optimized" },
    ],
    services: ["SEO Audit", "On-Page Optimization", "Meta Data", "Content Strategy"],
    quote: "Our organic traffic has steadily increased since implementing the SEO recommendations.",
    attribution: "Urban Pet Club Owner",
  },
];

export const portfolioFilters: Filter[] = ["All", "Store Growth", "Email", "Branding", "Technical", "Paid Ads", "Social Media", "SEO"];

export const faqs = [
  ["What services does Ron Digital offer?", "We offer SEO, website design, email marketing and automation, traffic optimization, conversion optimization, branding, and consultation."],
  ["How can Ron Digital help my business?", "We connect the right digital improvements to your business goals, helping you become easier to find, easier to trust, and easier to choose."],
  ["Do you design websites from scratch?", "Yes. We can shape a new website from strategy through launch, including its structure, content direction, design, and conversion path."],
  ["Can you improve my existing website?", "Yes. We can review what is working, identify friction, and recommend focused improvements rather than starting over unnecessarily."],
  ["Do you provide email marketing and automation?", "Yes. We can help plan email journeys, write useful follow-ups, and organize automations around your customer journey."],
  ["Can you help improve my website conversions?", "Yes. We look at the experience, messaging, calls to action, and key paths so more of the right visitors take the next step."],
  ["Can your services be customized?", "Absolutely. Every recommendation is shaped around your audience, goals, timeline, and current systems."],
  ["How much does a project cost?", "Projects start from $500. The final price depends on the scope, requirements, and level of support your project needs."],
  ["What is the minimum project budget?", "Our projects start from $500. A consultation helps us match the right starting point to your priorities."],
  ["How do I get started?", "Send a project request or email rondigital.team@gmail.com. We will review your goals and suggest a practical next step."],
] as const;

export const budgetOptions = ["$500 – $1,000", "$1,000 – $2,500", "$2,500 – $5,000", "$5,000+"] as const;
