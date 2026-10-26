import Link from "../components/Link";

function Menu() {
    const links = [
        {label: 'home', path: '/'},
        {label: 'about', path: '/about'},
        {label: 'compositions', path: '/compositions'},
        {label: 'installations', path: '/installations'},
        {label: 'releases', path: '/releases'},
        {label: 'contact', path: '/contact'},
    ];

    const renderedLinks = links.map((link) => {
        return <h1><Link key={link.label} to={link.path}>{link.label}</Link></h1>
    });

    return (
        <div style={{}}>
            {renderedLinks}
        </div>

    )
}

export default Menu;