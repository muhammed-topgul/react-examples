import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {WIKIPEDIA_API_URL} from "../common/env";

const Search = () => {

    const [term, setTerm] = useState('');

    useEffect(() => {

        search();

    }, [term]);

    // bu api cagirma icin
    const search = async () => {
        // url = https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=java
        await axios.get(WIKIPEDIA_API_URL, {
            params: {
                action: 'query',
                list: 'search',
                origin: '*',
                format: 'json',
                srsearch: term
            }
        });
    }

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