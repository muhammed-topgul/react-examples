import React, {useState} from "react";
import Dropdown from "./Dropdown";
import {options} from "../data/langs";

const Translate = () => {

    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className={"ui form"}>
                <div className={"filed"}>
                    <label>Enter Text</label>
                    <input value={text}
                           onChange={(event) => setText(event.target.value)}/>
                </div>
            </div>

            <Dropdown
                label={"Select a language"}
                selected={language}
                onSelectedChange={setLanguage}
                options={options}/>
        </div>
    )
}

export default Translate;
