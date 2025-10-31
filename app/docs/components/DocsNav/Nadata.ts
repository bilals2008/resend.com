// File: app/docs/components/DocsNav/Nadata.ts
// File: app/docs/data/sidebarData.tsx

export interface NavItem {
  id: number;
  title: string;
  link?: string;
  badge?: string;
}

export interface NavSection {
  id: number;
  title: string;
  items: NavItem[];
}

export const DocsNavData: NavSection[] = [
  {
    id: 1,
    title: "Documentation",
    items: [
      { id: 1, title: "API Reference", link: "/docs/api-reference" },
      { id: 2, title: "Knowledge Base", link: "/docs/knowledge-base" },
    ],
  },
  {
    id: 2,
    title: "Api Reference",
    items: [
      { id: 3, title: "Introduction", link: "/docs/introduction" },
    ],
  },
  {
    id: 3,
    title: "Quickstart",
    items: [
      { id: 4, title: "Node.js" },
      { id: 5, title: "Serverless", },
      { id: 6, title: "PHP"},
      { id: 7, title: "Ruby"},
      { id: 8, title: "Python"},
      { id: 9, title: "Go"},
      { id: 10, title: "Elixir"},
      { id: 11, title: "Java"},
      { id: 12, title: "SMTP"},
    ],
  },
  {
    id: 4,
    title: "Learn",
    items: [
      { id: 13, title: "Emails"},
    ],
  },
];