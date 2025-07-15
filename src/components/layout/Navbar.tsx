import Link from "next/link";
import { ButtonAnimatedBG } from "@/components/ui/ButtonAnimatedBG";

interface LinkType {
  href: string;
  title: string;
}

const NavLink = ({ title, href }: LinkType) => (
  <li className="font-semibold text-xl opacity-80">
    <Link href={href}>{title}</Link>
  </li>
);

export default function Navbar() {
  const links: LinkType[] = [
    { title: "Link", href: "/" },
    { title: "Link", href: "/1" },
    { title: "Link", href: "/2" },
    { title: "Link", href: "/2" },
  ];

  return (
    <nav className="navbar px-4 uppercase border-b-1 border-base-content/10">
      <div className="navbar-start font-bold lowercase text-3xl">
        <Link href="/">Digilos</Link>
      </div>
      <ul className="navbar-center gap-4 menu menu-horizontal">
        {links.map((l, i) => (
          <NavLink key={i} {...l} />
        ))}
      </ul>
      <ul className="navbar-end gap-2 menu-horizontal menu">
        <li>
          <ButtonAnimatedBG
            slideBg="bg-primary"
            className="border-base-content/10 text-base-content rounded-xl border-1 px-15 py-2  hover:text-primary-content text-xl font-semibold duration-100 ease-linear"
          >
            <Link href={"/login"} className="bg-transparent">
              Login
            </Link>
          </ButtonAnimatedBG>
        </li>
        <li>
          <ButtonAnimatedBG
            slideBg="bg-base-100"
            className="border-base-content/10 text-primary-content bg-primary rounded-xl border-1 px-15 py-2  hover:text-base-content  text-xl font-semibold duration-100 ease-linear"
          >
            <Link href={"/register"} className="bg-transparent">
              Register
            </Link>
          </ButtonAnimatedBG>
        </li>
      </ul>
    </nav>
  );
}
