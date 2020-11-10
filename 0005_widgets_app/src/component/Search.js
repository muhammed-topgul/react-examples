import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {WIKIPEDIA_API_URL, WIKIPEDIA_CURRENT_ELEMENT} from "../common/env";

const Search = () => {

    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);

    console.log(results);

    useEffect(() => {

        // eger uygulamna ilk kez acılıyorsa timer'a takılma
        if (term && !results.length) {
            search();
        } else {
            // arama cubuguna her harften sonra değil belirli aralıklarla arama yapmasını istiyorum
            // yani kullanıcı girecek ve 500 ms sonra arama calisacak
            const timeoutId = setTimeout(() => {
                if (term) {
                    search();
                }
            }, 1000);

            // eğer girdi olmaya devam ederse timeoutu sil
            // bu inner method bu ana method her çagırıldığında calisir
            // yani kullanıcı girdiye devam ederse timer'ı iptal et
            return () => {
                clearTimeout(timeoutId);
            }
        }

    }, [term]);

    // bu api cagirma icin
    const search = async () => {
        // url = https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=java
        const {data} = await axios.get(WIKIPEDIA_API_URL, {
            params: {
                action: 'query',
                list: 'search',
                origin: '*',
                format: 'json',
                srsearch: term
            }
        });

        setResults(data.query.search);
    }

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className={"item"}>
                <div className={"right floated content"}>
                    <a className={"ui button"} href={`${WIKIPEDIA_CURRENT_ELEMENT} ${result.pageid}`}>Go</a>
                </div>
                <div className={"content"}>
                    <div className={"header"}>
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}/>
                </div>
            </div>
        )
    });

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

            <div className={"ui celled list"}>
                {renderedResults}
            </div>
        </div>
    );
};

export default Search;
