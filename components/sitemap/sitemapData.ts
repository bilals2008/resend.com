// File: components/sitemap/sitemapData.ts

export const sitemapData = [
  {
    category: "Main",
    links: [
      { title: "Home", link: "/" },
      { title: "About", link: "/about" },
      { title: "Pricing", link: "/pricing" },
      { title: "Blog", link: "/blog" },
      { title: "Customers", link: "/customers" },
      { title: "Enterprise", link: "/enterprise" },
      { title: "Changelog", link: "/changelog" },
      { title: "Security", link: "/security" },
    ],
  },
  {
    category: "Docs",
    links: [
      { title: "Introduction", link: "/docs/introduction" },
      { title: "SDKs", link: "/docs/sdks" },
      { title: "Examples", link: "/docs/examples" },
    ],
  },
  {
    category: "Resend Status",
    links: [
      { title: "Status", link: "/resend-status" },
      { title: "Maintenance", link: "/resend-status/maintenance" },
      {
        title: "Previous-incidents",
        link: "/resend-status/previous-incidents",
      },
    ],
  },
  {
    category: "Auth",
    links: [
      { title: "Login", link: "/auth/login" },
      { title: "Signup", link: "/auth/signup" },
    ],
  },
];
