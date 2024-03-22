/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const NavLink = ({ ...props }) => {
    const {
        children,
        href = "",
        className = "",
        active = "",
    } = props;

    const [pathname, setPathname] = useState("/");

    const isActive = pathname == href;
    const activeClass = isActive ? active : "";

    useEffect(() => {
        setPathname(window.location.pathname);
    }, [props]);

    return (
        <a href={href} {...props} className={`${activeClass} ${className}`}>
            {children}
        </a>
    );
};

const Title = ({ children }) => (
    <h3 className='pb-3 px-4 font-medium text-gray-100 md:px-8'>
        {children}
    </h3>
);

const SectionsList = ({ items }) => (
    <div className='text-gray-100  px-4 md:px-8 '>
        <ul>
            {items?.map((item, idx) => (
                <li key={idx}>
                    <NavLink
                        href={item?.href}
                        active='text-gray-900 border-porange-400'
                        className='block w-full py-2 px-4 border-l hover:bg-porange duration-150'>
                        {item?.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    </div>
);

const Sidebar = () => {
    const lessons = {
        rustLessons: [{ name: "Comidas", href: "../" }, { name: "Bebidas", href: "../views/Local" },],
    }

    return (
        <>
            <nav
                className=" top-0 left-0 w-full h-full border-r  bg-pdark-grey space-y-8 overflow-auto sm:w-80">
                <div className='text-[0.9rem] space-y-6'>
                    <>
                        <div>
                            <Title>Filtros</Title>
                            <SectionsList items={lessons.rustLessons} />
                        </div>
                                            </>
                </div>
            </nav>
        </>
    );
};

export default Sidebar;