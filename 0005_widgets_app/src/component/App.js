import React, {useState} from "react";
import Route from "./Route";
import Accordion from "./Accordion";
import {items} from "../data/item";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import {options} from "../data/langs";
import Header from "./Header";

export default () => {

    const [selected, setSelected] = useState(options[0]);

    return (
        <div>

            <Header/>

            <Route path={"/"}>
                <Accordion items={items}/>
            </Route>

            <Route path={"/list"}>
                <Search/>
            </Route>

            <Route path={"/dropdown"}>
                <Dropdown
                    label={"Select a color"}
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>

            <Route path={"/translate"}>
                <Translate/>
            </Route>
        </div>
    )
}
