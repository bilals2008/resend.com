// File: components/Header/Navbar/json/menuitem.ts

type Menuitems ={
    title:string;
    href:string;
    description?:string;

}

export const menuItems: Menuitems[] = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Customers",
    href: "/customers",
  },
  {
    title: "Docs",
    href: "/docs/introduction",
  },
  {
    title: "Enterprise",
    href: "/enterprise",
  },
  {
    title: "Changelog",
    href: "/changelog",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Security",
    href: "/security",
  },
  {
    title: "Status",
    href: "/resend-status",
  },
];
