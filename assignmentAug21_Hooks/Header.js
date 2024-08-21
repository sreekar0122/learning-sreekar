import React, { useContext } from 'react';
import { CurrentUser } from './UserContext'; 
import { Notifications } from './Notifications'; 

function Header() {
    const user = useContext(CurrentUser);
    const notifications = useContext(Notifications);

    return (
        <header>
            {user ? `Welcome back, ${user.name}!` : 'Welcome!'}
            {notifications ? `You have ${notifications.length} notifications.` : 'No notifications.'}
        </header>
    );
}

export default Header;
