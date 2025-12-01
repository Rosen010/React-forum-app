import { createContext, useContext, useState } from "react";
import useRequest from "../hooks/useRequest";

const UserContext = createContext({
    isAuthenticated: false,
    user: {
        email: '',
        password: '',
        _createdOn: 0,
        _id: '',
        accessToken: '',
    },
    registerHandler() { },
    loginHandler() { },
    logoutHandler() { },
});

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const { request } = useRequest();

    const registerHandler = async (email, password, profilePicture) => {
        const newUser = { email, password, profilePicture };

        const result = await request('/users/register', 'POST', newUser);

        setUser(result);
    }

    const loginHandler = async (email, password) => {
        const result = await request('/users/login', 'POST', { email, password });

        console.log(result);

        setUser(result);
    }

    const logoutHandler = () => {
        return request('/users/logout', 'GET', null, { accessToken: user.accessToken })
            .finally(() => setUser(null));
    }

    const userCOntextValues = {
        user,
        isAuthenticated: user?.accessToken != null,
        registerHandler,
        loginHandler,
        logoutHandler,
    }

    return (
        <UserContext.Provider value={userCOntextValues} >
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    const contextData = useContext(UserContext);

    return contextData;
}

export default UserContext;