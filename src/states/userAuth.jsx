import React from 'react';

export const UserAuthContext = React.createContext(
    {
        user: 'Emily Fuskar',
        changeUserState: () => {}
    }
);
