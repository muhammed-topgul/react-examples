import React from "react";

const Link = ({className, href, children}) => {

    const onClick = (event) => {

        event.preventDefault();
        // url degistirir
        window.history.pushState({}, '', href);

        // Route' da url'in degistigini bildirir
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return (
        <a onClick={onClick} className={className} href={href}>
            {children}
        </a>
    )
}

export default Link;