import React, {useEffect, useState, useRef} from "react";

const Dropdown = ({label, selected, onSelectedChange, options}) => {

    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        // DROPDOWN' u kapat
        // butun sayfaya on click listener ekler
        const onBodyClick = (event) => {
            // eger tiklanan yer dropdown menunun kendisi ise hic bir sey yapma
            if (ref.current && ref.current.contains(event.target)) {
                return;
            }

            // eger ekranın geri kalanına tıklanırsa dropdownu kapat
            setOpen(false);
        }

        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        }

    }, []);

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

    console.log("B: ", ref.current);

    return (
        <div ref={ref} className={"ui form"}>
            <div className={"field"}>
                <label className={"label"}>{label}</label>
                <div
                    onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className={"dropdown icon"}/>
                    <div className={"text"}>{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ' '}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dropdown;
