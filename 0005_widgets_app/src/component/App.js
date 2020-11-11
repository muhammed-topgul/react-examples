import React, {useState} from "react";
import Accordion from "./Accordion";
import {items} from "../data/item";
import Search from "./Search";
import Dropdown from "./Dropdown";
import {options} from "../data/colors";

export default () => {

    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {showDropdown ?
                <Dropdown
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options}/> : null
            }
        </div>
    )
}
