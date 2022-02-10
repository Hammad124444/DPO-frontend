import {createContext, useEffect, useState} from "react";
import {useRouter} from "next/router";


const UserContext = createContext({
    user: null,
    logIn: () => {},
    logOut: () => {}
})

export function UserContextProvider(props) {
    const [userInfo, setUserInfo] = useState();
    const router = useRouter();
    useEffect(() => {
        const userData = localStorage.getItem('userInfo');
        if(userData) {
            signInHandler(userData);
        } else {
            signOutHandler();
        }
    }, userInfo)

    const signInHandler = (userData) => {
        setUserInfo(userData);
    }

    const signOutHandler = () => {
        router.push('/').then(() => {
            setUserInfo(null);
        });
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
