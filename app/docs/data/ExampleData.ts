// File: app/docs/data/ExampleData.ts

// Examples Page Data
export interface ExampleItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ExamplesData {
  title: string;
  subtitle: string;
  examples: ExampleItem[];
}

export const examplesData: ExamplesData = {
  title: "Examples",
  subtitle: "Explore sample apps for different use cases.",
  examples: [
    {
      id: 1,
      title: "Attachments",
      description: "Send emails with attachments",
      icon: "attachment",
    },
    {
      id: 2,
      title: "NextAuth",
      description: "Send emails with NextAuth",
      icon: "nextauth",
    },
    {
      id: 3,
      title: "React Email",
      description: "Send emails with React Email",
      icon: "react",
    },
    {
      id: 4,
      title: "Webhooks",
      description: "A Slack app using Resend webhooks",
      icon: "webhook",
    },
    {
      id: 5,
      title: "Prevent thread on Gmail",
      description: "Prevent threading on Gmail",
      icon: "gmail",
    },
    {
      id: 6,
      title: "Unsubscribe url header",
      description: "Add a shortcut for users to unsubscribe",
      icon: "unsubscribe",
    },
  ],
};