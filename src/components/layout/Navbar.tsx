import Link from "next/link";
import { ButtonAnimatedBG } from "@/components/ui/ButtonAnimatedBG";
import { Icon } from "@iconify/react";

interface LinkType {
    href: string;
    title: string;
}

const NavLink = ({ title, href }: LinkType) => (
    <li className="font-semibold opacity-80">
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
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <nav className="navbar px-4 uppercase border-b-1 border-base-content/10">
                    <div className="navbar-start font-bold lowercase text-3xl">
                        <Link href="/">Digilos</Link>
                    </div>
                    <ul className="navbar-center gap-4 menu menu-horizontal lg:flex hidden text-xl">
                        {links.map((l, i) => (
                            <NavLink key={i} {...l} />
                        ))}
                    </ul>
                    <ul className="navbar-end gap-2 menu-horizontal menu lg:flex hidden text-xl">
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
                            <Link
                                href={"/register"}
                                className="bg-primary text-primary-content px-15 py-2 text-xl font-semibold rounded-xl"
                            >
                                Register
                            </Link>
                        </li>
                    </ul>

                    <div className="navbar-end drawer-button lg:hidden">
                        <label htmlFor="my-drawer" className="btn btn-square btn-primary">
                            <Icon fontSize="22" icon="mingcute:menu-fill" />
                        </label>
                    </div>
                </nav>
            </div>
            <div className="drawer-side">
                <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 justify-between">
                    <ul>
                        {links.map((l, i) => (
                            <NavLink key={i} {...l} />
                        ))}
                    </ul>
                    <ul>
                        <NavLink href="/login" title="Login" />
                        <NavLink href="/register" title="Register" />
                    </ul>
                </ul>
            </div>
        </div>
    );
}
