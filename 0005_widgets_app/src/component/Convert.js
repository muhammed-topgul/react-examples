import React, {useEffect} from "react";
import axios from "axios";
import {GOOGLE_TRANSLATE_API_KEY} from "../common/env";

const Convert = ({language, text}) => {

    useEffect(() => {
        axios.post(
            'https://translation.googleapis.com/language/translate/v2',
            {},
            {
                params: {
                    q: text,
                    target: language.value,
                    key: GOOGLE_TRANSLATE_API_KEY
                }
            }
        )
    }, [language, text]);

    return (<div>

    </div>)
}

export default Convert;
