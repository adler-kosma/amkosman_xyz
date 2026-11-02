import { useContext, useEffect, useRef } from "react";
import Link from "../components/Link";
import NavigationContext from "../context/navigation";

function Menu() {
    const { currentPath } = useContext(NavigationContext);
    const menuRef = useRef(null);

    // Publish the menu height so the phone layout can place content and photo below it.
    useEffect(() => {
        const menu = menuRef.current;
        const observer = new ResizeObserver(() => {
            document.documentElement.style.setProperty('--menu-height', `${menu.offsetHeight}px`);
        });
        observer.observe(menu);
        return () => observer.disconnect();
    }, []);

    const links = [
        {label: 'home', path: '/'},
        {label: 'about', path: '/about'},
        {label: 'compositions', path: '/compositions'},
        {label: 'installations', path: '/installations'},
        {label: 'releases', path: '/releases'},
        {label: 'contact', path: '/contact'},
    ];

    const renderedLinks = links.map((link) => {
        return <h1 key={link.label} className={link.path === currentPath ? 'active' : ''}><Link to={link.path}>{link.label}</Link></h1>
    });

    // On phones the menu collapses to a bar above the content.
    return (
        <div className="menu-compact" ref={menuRef}>
            {renderedLinks}
        </div>

    )
}

export default Menu;
