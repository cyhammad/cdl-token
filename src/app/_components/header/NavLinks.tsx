import Link from "next/link";

const NavLinks = ({ lang = "en" }) => {
  const headerLinks = [
    {
      title: "Home",
      href: `/${lang}/`,
    },
    {
      title: "About",
      href: `/${lang}/about`,
    },
    {
      title: "Product",
      href: `/${lang}/product`,
    },
    {
      title: "Docs",
      href: `/${lang}/docs`,
    },
    {
      title: "Contact",
      href: `/${lang}/contact`,
    },
  ];
  return (
    <div className="hidden lg:flex items-center gap-8 px-10">
      {headerLinks.map((link, index) => (
        <Link
          className="font-apfel text-lg font-bold"
          key={index}
          href={link.href}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
