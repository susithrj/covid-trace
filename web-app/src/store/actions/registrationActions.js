export const registerBusiness = (business) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        console.log(business)
        firestore.collection('sc_location').add({
            ...business
        }).then(() => {
            dispatch({ type: 'REGISTRATION_SUCCESS', business });
        }).catch((err) => {
            dispatch({ type: 'REGISTRATION_ERROR', err });
        })
    }
}

export const registerBus = (bus) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        console.log(bus)
        firestore.collection('sc_bus').add({
            ...bus
        }).then(() => {
            dispatch({ type: 'REGISTRATION_SUCCESS', bus });
        }).catch((err) => {
            dispatch({ type: 'REGISTRATION_ERROR', err });
        })
    }
}

export const registerTrain = (train) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        console.log(train)
        firestore.collection('sc_train').add({
            ...train
        }).then(() => {
            dispatch({ type: 'REGISTRATION_SUCCESS', train });
        }).catch((err) => {
            dispatch({ type: 'REGISTRATION_ERROR', err });
        })
    }
}

export const registerVehicle = (vehicle) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        console.log(vehicle)
        firestore.collection('sc_vehicle').add({
            ...vehicle
        }).then(() => {
            dispatch({ type: 'REGISTRATION_SUCCESS', vehicle });
        }).catch((err) => {
            dispatch({ type: 'REGISTRATION_ERROR', err });
        })
    }
}


export const registerOrganisations = (org) => async (
    dispatch,
    getState,
    { getFirebase, getFirestore }
) => {
    const firestore = getFirestore();
    const organisation = firestore.collection('sc_org');
    const orgUser = firestore.collection('sc_org_users');
    organisation.add({
        Name: org.Name,
        UserName: org.UserName,
        WebSite: org.WebSite,
    }).then(() => {
        orgUser.add({
            org: org.UserName,
            phoneNumber: org.phoneNumber
        }).then(() => {
            dispatch({ type: 'ORG_REGISTRATION_SUCCESS', org });
        })
    }).catch((err) => {
        dispatch({ type: 'ORG_REGISTRATION_ERROR', err });
    })
};
