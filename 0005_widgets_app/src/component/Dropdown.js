import React from "react";

const Dropdown = ({selected, onSelectedChange, options}) => {

    const renderedOptions = options.map((option) => {

        // secilen secenek listelenmesin
        if (option.value === selected.value) {
            return null;
        }

        return (
            <div key={option.value}
                 className={"item"}
                 onClick={() => onSelectedChange(option)}>
                {option.label}
            </div>
        )
    });

    return (
        <div className={"ui form"}>
            <div className={"field"}>
                <label className={"label"}>Select a Color</label>
                <div className={"ui selection dropdown visible active"}>
                    <i className={"dropdown icon"}/>
                    <div className={"text"}>{selected.label}</div>
                    <div className={"menu visible transition"}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dropdown;
