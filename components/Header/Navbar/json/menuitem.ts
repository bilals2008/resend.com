// File: components/Header/Navbar/json/menuitem.ts

type Menuitems ={
    title:string;
    href:string;
    description?:string;

}

export const menuItems:Menuitems[] = [
 
  {
    title: "About",
    href: "/about",
    description:
      "Learn more about our mission, vision, and the team behind the project.",
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
    href: "/docs",
  
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
];
