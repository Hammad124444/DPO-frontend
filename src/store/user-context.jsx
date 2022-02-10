import {createContext, useEffect, useState} from "react";

const UserContext = createContext({
    userInfo: null,
    logIn: () => {},
    logOut: () => {}
})

export function UserContextProvider(props) {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const userData = localStorage.getItem('userInfo');
        console.log(userData);
        if(userData) {
            console.log('hererere');
            setUserInfo(userData);
        }
    }, [])

    const signInHandler = (userData) => {
        console.log(userData);
        localStorage.setItem('userInfo', userData);
        setUserInfo(userData);
    }

    const signOutHandler = () => {
        localStorage.removeItem('userInfo');
        setUserInfo(null);
    }

    const context = {
        userInfo: userInfo,
        logIn: signInHandler,
        logOut: signOutHandler
    }

    return(
        <UserContext.Provider value={context}>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserContext;
