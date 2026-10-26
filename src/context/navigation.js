import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

// Old menu paths, kept so existing links still land somewhere.
const REDIRECTS = {
    '/works': '/compositions',
    '/multichannel': '/compositions',
    '/discography': '/releases',
};

function resolvePath(path) {
    const target = REDIRECTS[path];
    if (target) {
        window.history.replaceState({}, '', target);
        return target;
    }
    return path;
}

function NavigationProvider({children}) {
    const [currentPath, setCurrentPath] = useState(() => resolvePath(window.location.pathname));

    useEffect(() => {
        const handler = () => {
            setCurrentPath(resolvePath(window.location.pathname));
        };
        window.addEventListener('popstate', handler);

        return () => {
            window.removeEventListener('popstate', handler);
        }
    }, []);

    const navigate = (to) => {
        window.history.pushState({},  '', to);
        setCurrentPath(to);
    };

    return <NavigationContext.Provider value={{currentPath, navigate}}>
        {children}
    </NavigationContext.Provider>
}

export { NavigationProvider};
export default NavigationContext;