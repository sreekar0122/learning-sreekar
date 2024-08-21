import React, { createContext, useState } from 'react';


export const Notifications = createContext();

export const Notification = ({ children }) => {
    const [notifications] = useState([]);
    return (
        <Notifications.Provider value={notifications}>
            {children}
        </Notifications.Provider>
    );
};

export default Notifications;