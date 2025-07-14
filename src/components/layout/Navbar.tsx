import Link from "next/link";

interface LinkType {
  href: string;
  title: string;
}

function NavLink({ title, href }: LinkType) {
  return (
    <li className="font-semibold text-xl opacity-80">
      <Link href={href}>{title}</Link>
    </li>
  );
}

export default function Navbar() {
  const authLinkClasses: string =
    "border px-16 py-3 font-bold text-xl rounded-xl";

  const links: LinkType[] = [
    { title: "Link", href: "/" },
    { title: "Link", href: "/1" },
    { title: "Link", href: "/2" },
    { title: "Link", href: "/2" },
  ];

  return (
    <nav className="navbar px-4 uppercase border-b-1 border-base-content/10">
      <div className="navbar-start font-bold lowercase text-3xl">
        <Link href={"/"}>Digilos</Link>
      </div>
      <ul className="navbar-center gap-4 menu menu-horizontal">
        {links.map((link, index) => (
          <NavLink key={index} title={link.title} href={link.href} />
        ))}
      </ul>
      <ul className="navbar-end gap-2 menu-horizontal menu">
        <li>
          <Link
            href="/login"
            className={authLinkClasses + " " + "border-base-content/10"}
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            href="/register"
            className={
              authLinkClasses +
              " " +
              "border-primary/10 bg-primary text-primary-content"
            }
          >
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
}
