// File: app/pricing/pricingData.ts
// src/data/pricingData.ts

export interface PricingFeature {
  name: string;
  available: boolean;
}

export interface PricingPlan {
  id: string;
  title: string;
  price: string;
  subtext: string;
  features: PricingFeature[];
  buttonText: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    title: "Free",
    price: "$0 / mo",
    subtext: "Up to 3,000 emails / mo\n100 emails / day",
    buttonText: "Get started",
    features: [
      { name: "Email Support", available: true },
      { name: "1 Domain", available: true },
      { name: "1-day Data Retention", available: true },
      { name: "Multi-Region", available: false },
      { name: "Single Sign-On", available: false },
      { name: "Dedicated IPs", available: false },
    ],
  },
  {
    id: "pro",
    title: "Pro",
    price: "$20 / mo",
    subtext: "50,000 emails / mo\nNo daily sending limit",
    buttonText: "Get started",
    features: [
      { name: "Slack Support", available: true },
      { name: "Unlimited Domains", available: true },
      { name: "3-day Data Retention", available: true },
      { name: "Multi-Region", available: true },
      { name: "Single Sign-On", available: false },
      { name: "Dedicated IP with Add-on", available: false },
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise",
    price: "Custom",
    subtext: "A plan based on your specific needs\nNo daily sending limit",
    buttonText: "Get started",
    features: [
      { name: "Priority Support", available: true },
      { name: "Unlimited Domains", available: true },
      { name: "Flexible Data Retention", available: true },
      { name: "Multi-Region", available: true },
      { name: "Single Sign-On", available: true },
      { name: "Dedicated IPs Included", available: true },
    ],
  },
];
