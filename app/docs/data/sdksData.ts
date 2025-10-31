// File: app/docs/data/sdksData.ts
// SDKs Page Data
export interface SDKItem {
  id: number;
  title: string;
  icon?: string;
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
        {
          id: 1,
          title: "Node.js",
          icon: "nodejs",
        },
        {
          id: 2,
          title: "PHP",
          icon: "php",
        },
        {
          id: 3,
          title: "Laravel",
          icon: "laravel",
        },
        {
          id: 4,
          title: "Python",
          icon: "python",
        },
        {
          id: 5,
          title: "Ruby",
          icon: "ruby",
      
        },
        { id: 6, title: "Go", icon: "go",  },
        {
          id: 7,
          title: "Java",
          icon: "java",
        },
      ],
    },
    {
      title: "Community SDKs",
      items: [
        {
          id: 8,
          title: "Elixir",
          icon: "elixir",
        },
        {
          id: 9,
          title: ".NET",
          icon: "dotnet",
        },
        {
          id: 10,
          title: "NestJS",
          icon: "nestjs",
        },
      ],
    },
    {
      title: "OpenAPI",
      items: [
        {
          id: 11,
          title: "OpenAPI",
          icon: "openapi",
        },
      ],
    },
  ],
};