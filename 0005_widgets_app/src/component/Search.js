import React, {useEffect, useState} from 'react';

const Search = () => {

    const [term, setTerm] = useState('');

    alert("1");
    console.log("I RUN WITH EVERY RENDER...");

    useEffect(() => {
        console.log("I ONLY RUN ONCE...");
        alert("2");
    }, []);

    useEffect(() => {
        console.log("I RUN AFTER EVERY RENDER AND AT THE INITIAL RENDER");
        alert("3");
    });

    useEffect(() => {
        console.log("I RUN AFTER EVERY RENDER IF 'term' CHANGES")
        alert("4");
    }, [term]);

    return (
        <div>
            <div className={"ui form"}>
                <div className={"field"}>
                    <label>Enter Search Term</label>
                    <input
                        className={"input"}
                        value={term}
                        onChange={(event) => setTerm(event.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Search;