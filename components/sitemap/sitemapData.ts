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
    category: "Resend Status",
    links: [
      { title: "Status", link: "/resend-status" },
      { title: "SOC", link: "/security/soc" },
      { title: "Maintenance", link: "/resend-status/maintenance" },
      {
        title: "Previous-incidents",
        link: "/resend-status/previous-incidents",
      },
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
    category: "Auth",
    links: [
      { title: "Login", link: "/login" },
      { title: "Signup", link: "/signup" },
    ],
  },
];
