import Accordion from "../component/Accordion";
import {items} from "../data/item";
import React from "react";
import Search from "../component/Search";
import Dropdown from "../component/Dropdown";
import Translate from "../component/Translate";

export const showAccordion = () => {
    if (window.location.pathname === '/') {
        return <Accordion items={items}/>
    }
}

export const showList = () => {
    if (window.location.pathname === '/list') {
        return <Search/>
    }
}

export const showDropdown = () => {
    if (window.location.pathname === '/dropdown') {
        return <Dropdown/>
    }
}

export const showTranslate = () => {
    if (window.location.pathname === '/translate') {
        return <Translate/>
    }
}

