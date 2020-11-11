import React, {useState} from "react";
import Dropdown from "./Dropdown";
import {options} from "../data/langs";

const Translate = () => {

    const [language, setLanguage] = useState(options[0]);

    return (
        <div>
            <Dropdown
                label={"Select a language"}
                selected={language}
                onSelectedChange={setLanguage}
                options={options}/>
        </div>
    )
}

export default Translate;
