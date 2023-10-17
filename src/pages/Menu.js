import Link from "../components/Link";

function Menu() {
    const links = [
        {label: 'home', path: '/'},
        {label: 'about', path: '/about'},
        {label: 'discography', path: '/discography'},
        {label: 'installations', path: '/installations'},
        {label: 'multichannel', path: '/multichannel'},
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