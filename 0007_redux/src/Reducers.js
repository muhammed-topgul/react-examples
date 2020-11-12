// DEPARTMENTS

export const claimHistory = (oldListOfClaims = [], action) => {
    if (action.type === 'CREATE_CLAIM') {
        // we care about FORM ACTION
        return [...oldListOfClaims, action.payload];
    }

    // we do not care about FORM ACTION
    return oldListOfClaims;
}


export const accounting = (bagOfMany, action) => {
    if (action.type === 'CREATE_CLAIM') {
        return bagOfMany - action.payload.amountOfMoneyToCollect;
    } else if (action.type === 'CREATE_POLICY') {
        return bagOfMany + action.payload.amount;
    }

    return bagOfMany;
}


export const policies = (listOfPolicies = [], action) => {
    if (action.type === 'CREATE_POLICY') {
        return [...listOfPolicies, action.payload.name]
    } else if (action.type === 'DELETE_POLICY') {
        return listOfPolicies.filter(name => name !== action.payload.name);
    }

    return listOfPolicies;
}
