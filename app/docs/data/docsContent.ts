// File: app/docs/data/docsContent.ts


// Introduction Page Data
export interface QuickstartItem {
  id: number;
  title: string;
  icon: string;
  link: string;
}

export interface ExploreCard {
  id: number;
  title: string;
  description: string;
}

export interface IntroductionData {
  title: string;
  subtitle: string;
  quickstart: {
    title: string;
    description: string;
    items: QuickstartItem[];
  };
  explore: {
    title: string;
    description: string;
    cards: ExploreCard[];
  };
  next:[{title:string,link:string}]
}

export const introductionData: IntroductionData = {
  title: "Introduction",
  subtitle: "Resend is the email API for developers.",
  quickstart: {
    title: "Quickstart",
    description: "Learn how to get Resend set up in your project.",
    items: [
      { id: 1, title: "Node.js Quickstart", icon: "nodejs", link: "/docs/quickstart/nodejs" },
      { id: 2, title: "Next.js Quickstart", icon: "nextjs", link: "/docs/quickstart/nextjs" },
      { id: 3, title: "Express Quickstart", icon: "express", link: "/docs/quickstart/express" },
      { id: 4, title: "PHP Quickstart", icon: "php", link: "/docs/quickstart/php" },
      { id: 5, title: "Laravel Quickstart", icon: "laravel", link: "/docs/quickstart/laravel" },
      { id: 6, title: "Python Quickstart", icon: "python", link: "/docs/quickstart/python" },
      { id: 7, title: "Ruby Quickstart", icon: "ruby", link: "/docs/quickstart/ruby" },
      { id: 8, title: "Rails Quickstart", icon: "rails", link: "/docs/quickstart/rails" },
      { id: 9, title: "Go Quickstart", icon: "go", link: "/docs/quickstart/go" },
      { id: 10, title: "Elixir Quickstart", icon: "elixir", link: "/docs/quickstart/elixir" },
      { id: 11, title: "Java Quickstart", icon: "java", link: "/docs/quickstart/java" },
    ],
  },
  explore: {
    title: "Explore",
    description: "Discover the full range of features and capabilities.",
    cards: [
      {
        id: 1,
        title: "Emails",
        description: "Visualize all the activity in your account.",
      },
      {
        id: 2,
        title: "Domains",
        description: "Ensure deliverability of your emails.",
       
      },
      {
        id: 3,
        title: "Webhooks",
        description: "Notify your application about email events.",
      },
    ],
  },
  next: [
    {
      title:"Examples",
      link:"/docs/examples"
    }
  ]
};

// SDKs Page Data
export interface SDKItem {
  id: number;
  title: string;
  icon: string;
  link: string;
}

export interface SDKCategory {
  title: string;
  items: SDKItem[];
}

export interface SDKsData {
  title: string;
  subtitle: string;
  categories: SDKCategory[];
}

export const sdksData: SDKsData = {
  title: "SDKs",
  subtitle: "Open source client libraries for your favorite platforms.",
  categories: [
    {
      title: "Official SDKs",
      items: [
        { id: 1, title: "Node.js", icon: "nodejs", link: "github.com/resend/resend-node" },
        { id: 2, title: "PHP", icon: "php", link: "github.com/resend/resend-php" },
        { id: 3, title: "Laravel", icon: "laravel", link: "github.com/resend/resend-laravel" },
        { id: 4, title: "Python", icon: "python", link: "github.com/resend/resend-python" },
        { id: 5, title: "Ruby", icon: "ruby", link: "github.com/resend/resend-ruby" },
        { id: 6, title: "Go", icon: "go", link: "github.com/resend/resend-go" },
        { id: 7, title: "Java", icon: "java", link: "github.com/resend/resend-java" },
      ],
    },
    {
      title: "Community SDKs",
      items: [
        { id: 8, title: "Elixir", icon: "elixir", link: "github.com/elixir-saas/resend-elixir" },
        { id: 9, title: ".NET", icon: "dotnet", link: "github.com/filipatoscano/resend.net" },
        { id: 10, title: "NestJS", icon: "nestjs", link: "github.com/jiangtaste/nestjs-resend" },
      ],
    },
    {
      title: "OpenAPI",
      items: [
        { id: 11, title: "OpenAPI", icon: "openapi", link: "github.com/resend/resend-openapi" },
      ],
    },
  ],
};

// Examples Page Data
export interface ExampleItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
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
      link: "/examples/attachments",
    },
    {
      id: 2,
      title: "NextAuth",
      description: "Send emails with NextAuth",
      icon: "nextauth",
      link: "/examples/nextauth",
    },
    {
      id: 3,
      title: "React Email",
      description: "Send emails with React Email",
      icon: "react",
      link: "/examples/react-email",
    },
    {
      id: 4,
      title: "Webhooks",
      description: "A Slack app using Resend webhooks",
      icon: "webhook",
      link: "/examples/webhooks",
    },
    {
      id: 5,
      title: "Prevent thread on Gmail",
      description: "Prevent threading on Gmail",
      icon: "gmail",
      link: "/examples/prevent-thread-gmail",
    },
    {
      id: 6,
      title: "Unsubscribe url header",
      description: "Add a shortcut for users to unsubscribe",
      icon: "unsubscribe",
      link: "/examples/unsubscribe-header",
    },
  ],
};