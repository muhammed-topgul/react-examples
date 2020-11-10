import React, {useState} from "react";
import Accordion from "./Accordion";
import {items} from "../data/item";
import Search from "./Search";
import Dropdown from "./Dropdown";
import {options} from "../data/colors";

export default () => {

    const [selected, setSelected] = useState(options[0]);

    console.log(options[0])

    return (
        <div>
            <Dropdown
                selected={selected}
                onSelectedChange={setSelected}
                options={options}/>
        </div>
    )
}
