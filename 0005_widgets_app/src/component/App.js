import React from "react";
import Accordion from "./Accordion";
import {items} from "../data/item";

export default () => {
    return (
        <div>
            <Accordion items={items}/>
        </div>
    )
}