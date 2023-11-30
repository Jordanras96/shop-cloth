import { createContext, useState } from "react";
import PropTypes from "prop-types";

//valeurs auxquelles on veut avoir accès
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser};
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
        )
}

UserProvider.propTypes = {
    children: PropTypes.any,
  };