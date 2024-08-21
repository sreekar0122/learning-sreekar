import React, { createContext, useState } from 'react';

export const CurrentUser = createContext();


export const UserProvider = ({ children }) => {
    const [user] = useState({ name: 'John Doe' });
    return (
        <CurrentUser.Provider value={user}>
            {children}
        </CurrentUser.Provider>
    );
};

export default CurrentUser;